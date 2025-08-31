import Appbar from '@/components/Appbar'

interface Props {
  children: React.ReactNode
}

export default (props: Props) => {
  return (
    <div className="container flex h-screen w-full flex-col items-center pt-20">
      <Appbar />
      <div className="w-full flex-1 py-4">{props.children}</div>
    </div>
  )
}
