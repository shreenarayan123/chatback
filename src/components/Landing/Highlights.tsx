import HighlightCard from '@/components/common/HighlightCard'
import PageTile from '@/components/common/PageTile'
import { highligtsCardData } from '@/constants'

const Highlights = () => {
  return (
    <div id="highlights" className="container flex flex-col items-center">
      <div className="flex-center flex-col ">
        <PageTile title="Highlights" dotBgColor="bg-blue-400" />
        <div className="mt-10 w-full flex-center flex-col">
          <h2 className="main-h2">Why Choose Chatback?</h2>
          <p className="main-p">
            Experience a seamless blend of customization, integration, and{' '}
            <br />
            scalability designed to elevate your customer support.
          </p>
        </div>
      </div>
      <div className="mt-15 flex items-stretch justify-between gap-5 ">
        {highligtsCardData.map(({ title, description, icon }) => (
          <HighlightCard
            key={title}
            title={title}
            description={description}
            icon={icon}
          />
        ))}
      </div>
    </div>
  )
}

export default Highlights
