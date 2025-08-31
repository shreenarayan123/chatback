'use client'

import { Eye, FileTextIcon, XIcon } from 'lucide-react'
import { useParams } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import { toast } from 'sonner'
import Spinner from '@/components/common/Spinner'
import Drop from '@/components/Drop'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import {
  UploaderProvider,
  type UploadFn,
} from '@/components/upload/uploader-provider'
import type { Docs } from '@/generated/prisma'
import { formatBytes } from '@/hooks/use-file-upload'
import { useEdgeStore } from '@/lib/edgestore'
import { useFileStore } from '@/store/fileStore'

async function getFiles(agentId: string): Promise<Docs[]> {
  try {
    const response = await fetch(`/api/agents/files?agentId=${agentId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error('Failed to fetch files')
    }

    const files = await response.json()
    return files
  } catch (error) {
    console.error('Error fetching files:', error)
    toast.error('Failed to fetch files')
    // return []
    return [] as Docs[]
  }
}

const FilePage = () => {
  const params = useParams()
  const agentId = params.agentId as string
  const { edgestore } = useEdgeStore()
  const [_uploading, setUploading] = useState(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [deletingIds, setDeletingIds] = useState<Set<string>>(new Set())
  const { files, setFiles, addFile, removeFile } = useFileStore()

  async function deleteFile({ fileId, url }: { fileId: string; url: string }) {
    setDeletingIds((prev) => new Set(prev).add(fileId))
    try {
      await edgestore.publicFiles.delete({ url }).then(async () => {
        await fetch('/api/agents/files/deleteFiles', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ fileId }),
        })
        toast.success('File deleted successfully')
      })

      removeFile(fileId)
    } catch (_error) {
      toast.error('Failed to delete file')
      console.error('Delete file error:', _error)
      // Optionally, you can re-upload the file if deletion fails
      // await edgestore.publicFiles.upload({ url })
    } finally {
      setDeletingIds((prev) => {
        const newSet = new Set(prev)
        newSet.delete(fileId)
        return newSet
      })
    }
  }

  useEffect(() => {
    async function fetchFiles() {
      setLoading(true)
      const data = await getFiles(agentId)

      if (data.length > 0) {
        setFiles(Array.isArray(data) ? data : [data])
      }
      setLoading(false)
    }

    if (!files || files.length === 0) {
      fetchFiles()
    }
  }, [agentId])

  const uploadFn: UploadFn = useCallback(
    async ({ file, onProgressChange, signal }) => {
      setUploading(true)
      const res = await edgestore.publicFiles.upload({
        file,
        signal,
        onProgressChange,
      })
      try {
        if (res) {
          const fileInfo = {
            agentId,
            name: file.name,
            size: file.size,
            type: file.type,
            url: res.url,
          }

          const saveRes = await fetch('/api/agents/files/saveFiles', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(fileInfo),
          })

          // console.log('saveRes', await saveRes.json())

          if (!saveRes.ok) {
            throw new Error('Failed to save file info')
          }
          if (saveRes.ok) {
            addFile(await saveRes.json())
          }
        }
      } catch (error) {
        toast.error('Upload failed')
        console.error('Upload error:', error)
        await edgestore.publicFiles.delete({ url: res.url })
      } finally {
        setUploading(false)
      }

      return res
    },
    [edgestore, agentId, setUploading],
  )

  return (
    <UploaderProvider uploadFn={uploadFn} autoUpload={false}>
      <div>
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-xl">File</h3>
          <p className="font-medium text-zinc-500">
            The Files tab allows you to upload and manage various document types
            to train your AI agent.
          </p>
        </div>
        <div className="mt-4">
          <Drop />
        </div>
      </div>

      {loading ? (
        <div className="mt-4 flex flex-col gap-2">
          <Skeleton className="h-16 w-full bg-zinc-200" />
          <Skeleton className="h-16 w-full bg-zinc-200" />
        </div>
      ) : files && files.length > 0 ? (
        <div className="mt-4 flex flex-col gap-2">
          <h3 className="font-semibold text-lg">Uploaded Files</h3>
          {files.map((file) => (
            <div
              key={file.id}
              className="flex items-center justify-between gap-2 rounded-lg border bg-background p-2 pe-3"
            >
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="flex aspect-square size-10 shrink-0 items-center justify-center rounded border">
                  <FileTextIcon className="size-4 opacity-60" />
                </div>
                <div className="flex min-w-0 flex-col gap-0.5">
                  <p className="truncate font-medium text-[13px]">
                    {file.name}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {formatBytes(file.size)}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={file.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-sm text-zinc-800 hover:text-foreground"
                >
                  <Eye className="size-5 text-foreground/80 hover:text-foreground" />
                </a>

                <Button
                  size="icon"
                  variant="ghost"
                  className="-me-2 size-8 cursor-pointer text-muted-foreground/80 hover:bg-transparent hover:text-foreground"
                  onClick={() => deleteFile({ fileId: file.id, url: file.url })}
                  aria-label="Remove file"
                  key={file.id}
                >
                  {deletingIds.has(file.id) ? (
                    <Spinner />
                  ) : (
                    <XIcon className="size-4" aria-hidden="true" />
                  )}
                </Button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        ''
      )}
    </UploaderProvider>
  )
}

export default FilePage
