import PageTile from '@/components/common/PageTile'
import PricingTableShort from '@/components/PricingTableShort'

const Pricing = () => {
  return (
    <div className="container flex flex-col">
      <div className="flex-center">
        <PageTile title="Pricing" dotBgColor="bg-pink-400" />
      </div>
      <div className="mt-15 flex-center flex-col">
        <h2 className="main-h2">Flexible Plans for Every Stage</h2>
        <p className="main-p">
          Choose a plan that aligns with your needs, from startups to <br />
          enterprises.
        </p>
      </div>
      <div className="mt-15 flex justify-center">
        <PricingTableShort />
      </div>
    </div>
  )
}

export default Pricing
