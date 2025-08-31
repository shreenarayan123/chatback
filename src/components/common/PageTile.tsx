const PageTile = ({
  title,
  dotBgColor = 'bg-blue-500',
}: {
  title: string
  dotBgColor?: string
}) => {
  return (
    <div className="flex-center gap-2 rounded-full border-1 border-black px-5 py-1">
      <div className={`size-1.5 rounded-full ${dotBgColor}`} />
      <p>{title}</p>
    </div>
  )
}

export default PageTile
