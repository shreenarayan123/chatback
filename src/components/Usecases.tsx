import {
  Briefcase,
  GraduationCap,
  Headset,
  ShoppingCart,
  UserCheck,
} from 'lucide-react'
import { GlowingEffect } from '@/components/ui/glowing-effect'

export default function Usecases() {
  return (
    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        icon={
          <GraduationCap className="h-4 w-4 text-blue-600 dark:text-neutral-400" />
        }
        title="Educational Institutions"
        description="Provide students with instant access to course materials, schedules, and FAQs through an AI-powered assistant."
      />

      <GridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        icon={
          <Briefcase className="h-4 w-4 text-green-600 dark:text-neutral-400" />
        }
        title="Businesses"
        description="Enhance internal support by training chatbots on company wikis and SOPs, streamlining employee workflows."
      />

      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        icon={
          <Headset className="h-4 w-4 text-pink-600 dark:text-neutral-400" />
        }
        title="Customer Support"
        description="Reduce support tickets by enabling customers to resolve queries instantly via AI-driven self-service chat."
      />

      <GridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
        icon={
          <ShoppingCart className="h-4 w-4 text-amber-600 dark:text-neutral-400" />
        }
        title="E-commerce"
        description="Assist customers with product inquiries, order tracking, and returns through automated chat support."
      />

      <GridItem
        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
        icon={
          <UserCheck className="h-4 w-4 text-fuchsia-600 dark:text-neutral-400" />
        }
        title="Human Resources"
        description="Streamline HR processes by providing employees with instant access to policies, benefits information, and onboarding resources through an AI assistant.

"
      />
    </ul>
  )
}

interface GridItemProps {
  area: string
  icon: React.ReactNode
  title: string
  description: React.ReactNode
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          variant="default"
          borderWidth={1}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 text-balance pt-0.5 font-sans font-semibold text-black text-xl/[1.375rem] md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              <h2 className="font-sans text-black text-sm/[1.125rem] md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}
