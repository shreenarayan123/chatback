export type PricingProp = {
  icon: React.ReactNode
  title: string
  price: string
  priceDescription: string
  buttonText: string
  buttonClassName: string
  buttonVariant: 'outline' | 'default'
  description?: string
  features: string[]
  featuresFooter?: string
}
