import type { JSX } from 'react'

const HighlightCard = ({
  title,
  description,
  icon,
}: {
  title: string
  description: string
  icon: JSX.Element
}) => {
  return (
    <div className="flex min-w-[200px] flex-1 flex-col rounded-2xl border-[1px] border-zinc-400/20 bg-white p-5 py-10">
      {icon}
      <h4 className="mt-5 font-semibold text-xl">{title}</h4>
      <p className="mt-3 text-pretty text-base text-foreground/70">
        {description}
      </p>
    </div>
  )
}

export default HighlightCard
