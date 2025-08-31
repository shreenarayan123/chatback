import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { pricingTableItems } from '@/constants'
import type { PricingProp } from '@/types'

export default function PricingTableShort() {
  return (
    <div className="flex gap-2">
      {pricingTableItems.map(
        ({
          icon,
          title,
          price,
          priceDescription,
          buttonText,
          buttonClassName,
          buttonVariant,
          description,
          features,
          featuresFooter,
        }) => {
          return (
            <PricingTableItem
              key={title}
              icon={icon}
              title={title}
              price={price}
              priceDescription={priceDescription}
              buttonText={buttonText}
              buttonClassName={buttonClassName}
              buttonVariant={`${buttonVariant}`}
              description={description}
              features={features}
              featuresFooter={featuresFooter}
            />
          )
        },
      )}
    </div>
  )
}

function PricingTableItem({
  icon,
  title,
  price,
  priceDescription,
  buttonText,
  buttonClassName = '',
  description = '',
  buttonVariant,
  features,
  featuresFooter = '',
}: PricingProp) {
  return (
    <div className="flex flex-1 flex-col rounded-xl border border-gray-400/30 bg-white p-6 py-10">
      <div className="flex flex-col gap-11 border-gray-200 border-b pb-5">
        <div className="flex items-center gap-4">
          {icon}
          <h3 className="font-bold text-3xl">{title}</h3>
        </div>
        <div>
          <p className=" text-5xl ">{price}</p>
          <p className="text-base text-gray-500">{priceDescription}</p>
        </div>
        <Button variant={buttonVariant} className={`${buttonClassName} w-full`}>
          {buttonText}
        </Button>
      </div>
      <div className="mt-5 ">
        {description && <p className="mb-5 font-semibold ">{description}</p>}
        <ul className="flex flex-col gap-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-2.5">
              <span>
                <Check className="size-5" />
              </span>
              <p>{feature}</p>
            </li>
          ))}
        </ul>
        {featuresFooter && (
          <p className="mt-5 text-muted-foreground text-sm">{featuresFooter}</p>
        )}
      </div>
    </div>
  )
}
