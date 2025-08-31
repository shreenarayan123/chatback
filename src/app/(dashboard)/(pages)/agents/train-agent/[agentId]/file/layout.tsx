import type { ReactNode } from 'react'
import { EdgeStoreProvider } from '@/lib/edgestore'

const FileUploadLayout = ({ children }: { children: ReactNode }) => {
  return <EdgeStoreProvider>{children}</EdgeStoreProvider>
}

export default FileUploadLayout
