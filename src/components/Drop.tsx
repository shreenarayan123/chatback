'use client'
import {
  AlertCircleIcon,
  Eye,
  FileTextIcon,
  FileUpIcon,
  XIcon,
} from 'lucide-react'
import { useParams } from 'next/navigation'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import {
  type FileState,
  useUploader,
} from '@/components/upload/uploader-provider'
import { formatBytes, useFileUpload } from '@/hooks/use-file-upload'

export default function Component() {
  const {
    fileStates, // Array of current file states
    addFiles, // Function to add files
    removeFile, // Function to remove a file by key
    cancelUpload, // Function to cancel an upload by key
    uploadFiles, // Function to trigger uploads (all pending or specific keys)
  } = useUploader()

  function handleAddFiles(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    if (!e.target.files) return
    addFiles(Array.from(e.target.files))
    e.target.value = ''
  }

  function handleRemoveFile(fileState: FileState) {
    if (fileState.status === 'UPLOADING') {
      cancelUpload(fileState.key)
    }
    removeFile(fileState.key)
  }

  async function handleUploadFiles() {
    toast.promise(
      (async () => {
        const pendingFiles = fileStates.filter(
          (file) => file.status === 'PENDING',
        )

        for (const fileState of pendingFiles) {
          await uploadFiles([fileState.key])
          removeFile(fileState.key)
        }

        // fileStates = fileStates.filter((file) => file.status !== 'COMPLETE')
      })(),

      {
        loading: 'Uploading files...',
        success: 'Files uploaded and saved successfully!',
        error: 'Failed to upload or save files',
      },
    )
  }

  const maxSize = 2 * 1024 * 1024 // 10MB default
  const maxFiles = 1

  const [
    { isDragging, errors },
    {
      handleDragEnter,
      handleDragLeave,
      handleDragOver,
      handleDrop,
      openFileDialog,
      getInputProps,
    },
  ] = useFileUpload({
    accept:
      'application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    multiple: true,
    maxFiles,
    maxSize,
  })

  return (
    <div className="flex flex-col gap-2">
      {/* Drop area */}
      <button
        type="button"
        tabIndex={0}
        onClick={openFileDialog}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        data-dragging={isDragging || undefined}
        className="flex min-h-40 flex-col items-center justify-center rounded-xl border border-input border-dashed p-4 transition-colors hover:bg-accent/50 has-disabled:pointer-events-none has-[input:focus]:border-ring has-disabled:opacity-50 has-[input:focus]:ring-[3px] has-[input:focus]:ring-ring/50 data-[dragging=true]:bg-accent/50"
      >
        <input
          {...getInputProps()}
          className="sr-only"
          aria-label="Upload files"
          onChange={handleAddFiles}
        />

        <div className="flex flex-col items-center justify-center text-center">
          <div
            className="mb-2 flex size-11 shrink-0 items-center justify-center rounded-full border bg-background"
            aria-hidden="true"
          >
            <FileUpIcon className="size-4 opacity-60" />
          </div>
          <p className="mb-1.5 font-medium text-sm">Upload files</p>
          <p className="mb-2 text-muted-foreground text-xs">
            Drag & drop or click to browse
          </p>
          <div className="flex flex-wrap justify-center gap-1 text-muted-foreground/70 text-xs">
            <span>Pdf, Word, Text files only.</span>
            <span>∙</span>
            <span>Max {maxFiles} files</span>
            <span>∙</span>
            <span>Up to {formatBytes(maxSize)}</span>
          </div>
        </div>
      </button>

      {errors.length > 0 && (
        <div
          className="flex items-center gap-1 text-destructive text-xs"
          role="alert"
        >
          <AlertCircleIcon className="size-3 shrink-0" />

          <span>{errors[0]}</span>
        </div>
      )}

      {/* File list */}

      {fileStates.length > 0 && (
        <div className="space-y-2">
          {fileStates.map((fileState) => (
            <div
              key={fileState.key}
              className="flex items-center justify-between gap-2 rounded-lg border bg-background p-2 pe-3"
            >
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="flex aspect-square size-10 shrink-0 items-center justify-center rounded border">
                  <FileTextIcon className="size-4 opacity-60" />
                </div>
                <div className="flex min-w-0 flex-col gap-0.5">
                  <p className="truncate font-medium text-[13px]">
                    {fileState.file.name}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {formatBytes(fileState.file.size)}
                  </p>
                  {fileState.status === 'ERROR' && (
                    <div
                      className="flex items-center gap-1 text-destructive text-xs"
                      role="alert"
                    >
                      <AlertCircleIcon className="size-3 shrink-0" />

                      <span>{fileState.error}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2">
                {fileState.status === 'COMPLETE' && fileState.url && (
                  <a
                    href={fileState.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-sm text-zinc-800 hover:text-foreground"
                  >
                    <Eye className="size-5 text-foreground/80 hover:text-foreground" />
                  </a>
                )}
                {fileState.status === 'UPLOADING' && (
                  <span className="text-sm text-zinc-800 ">
                    {fileState.progress}%
                  </span>
                )}
                <Button
                  size="icon"
                  variant="ghost"
                  className="-me-2 size-8 cursor-pointer text-muted-foreground/80 hover:bg-transparent hover:text-foreground"
                  onClick={() => handleRemoveFile(fileState)}
                  aria-label="Remove file"
                >
                  <XIcon className="size-4" aria-hidden="true" />
                </Button>
              </div>
            </div>
          ))}

          {fileStates.length > 0 && (
            <div className="mt-4">
              <Button size="sm" variant="default" onClick={handleUploadFiles}>
                Upload
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

// {
//   /*
//   {
//     plan=> no of agents allowed, allowed storage,
//     storeAgent=> storage used

//   }

//   */
// }
