import { create } from 'zustand'

type File = {
  name: string
  size: number
  type: string
  url: string
  id: string
}

interface FileStoreType {
  files: File[] | null
  setFiles: (files: File[]) => void
  addFile: (file: File) => void
  removeFile: (fileId: string) => void
}

export const useFileStore = create<FileStoreType>((set) => ({
  files: null,

  setFiles: (files) => set({ files }),

  addFile: (file) =>
    set((state) => ({
      files: state.files ? [...state.files, file] : [file],
    })),

  removeFile: (fileId) =>
    set((state) => ({
      files: state.files
        ? state.files.filter((file) => file.id !== fileId)
        : null,
    })),
}))
