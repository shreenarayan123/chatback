import PageTile from '@/components/common/PageTile'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

import { useCaseData } from '@/constants'

const Working = () => {
  return (
    <div className="container flex flex-col">
      <div className="flex-center">
        <PageTile title="How it works" dotBgColor="bg-pink-400" />
      </div>
      <div className="mt-10 flex-center flex-col">
        <h2 className="main-h2">Build and Deploy in 4 Simple Steps</h2>
        <p className="main-p">
          From data upload to multi-platform deployment, creating your AI
          <br />
          supportagentisstraightforward.
        </p>
      </div>
      <div className="mt-15 flex-center flex-col">
        <Accordion
          type="single"
          collapsible
          className="w-full md:w-11/12 lg:w-9/12"
          defaultValue="item-1"
        >
          {useCaseData.map(({ title, description }, index) => (
            <AccordionItem
              key={title}
              value={`item-${index + 1}`}
              className="my-2 rounded-2xl px-5 data-[state=open]:border-[1px] data-[state=open]:border-zinc-400/30 data-[state=closed]:border-none data-[state=open]:bg-white data-[state=open]:py-6"
            >
              <AccordionTrigger className="font-semibold text-xl hover:no-underline data-[state=closed]:text-zinc-600/40 ">
                {title}
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-pretty text-base">
                {description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}

export default Working
