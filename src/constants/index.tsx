import {
  BookOpen,
  Gem,
  Share2,
  Shield,
  Sparkle,
  Sparkles,
  Star,
} from 'lucide-react'

import type { PricingProp } from '@/types'

export const pricingTableItems: PricingProp[] = [
  {
    icon: <Sparkle className="size-5 text-green-600" />,
    title: 'Free',
    price: '$0',
    priceDescription: 'per month',
    buttonText: 'Get Started',
    buttonVariant: 'outline',
    buttonClassName: '',
    description: '',
    features: [
      '1 custom AI chatbot',
      '100 message credits/month',
      '50 KB data storage',
      'Train on 1 link or document',
      'Basic UI integration (embed widget)',
      'Community support',
    ],
    featuresFooter: '',
  },
  {
    icon: <Star className="size-5 text-yellow-600" />,
    title: 'Hobby',
    price: '$10',
    priceDescription: 'per month',
    buttonText: 'Subscribe',
    buttonVariant: 'default',
    buttonClassName:
      'border-none cursor-pointer rounded-lg bg-zinc-900 text-white shadow-grad',
    description: 'Plus everything in Free',
    features: [
      '1 custom AI chatbot',
      '2000 message credits/month',
      '500 KB data storage',
      'Train on up to 3 links/agent',
      'Access to analytics dashboard',
      'App integrations (Slack, WhatsApp, Telegram)',
      'Email support',
    ],
    featuresFooter: '',
  },
  {
    icon: <Sparkles className="size-5 text-blue-600" />,
    title: 'Pro',
    price: '$50',
    priceDescription: 'per month',
    buttonText: 'Subscribe',
    buttonVariant: 'outline',
    buttonClassName: '',
    description: 'Plus everything in Hobby',
    features: [
      '2 custom AI chatbots',
      'Unlimited integrations',
      '5000 message credits/month',
      '2 MB data storage',
      'Train on 5 links/agent',
      'Advanced analytics & usage insights',
      'Priority email & chat support',
      'Custom UI configuration',
    ],
    featuresFooter: '',
  },
  {
    icon: <Gem className="size-5 text-pink-600" />,
    title: 'Enterprise',
    price: 'Let’s Talk',
    priceDescription: 'Leave it to us',
    buttonText: 'Contact Us',
    buttonVariant: 'outline',
    buttonClassName: '',
    description: 'Plus everything in Pro',
    features: [
      'Custom chatbot development by our team',
      'End-to-end integration support',
      'Scalable storage (up to 100+ MB)',
      'Onboarding & training sessions',
      'SLAs',
      'Integration with private/internal tools',
    ],
    featuresFooter: '',
  },
]

export const highligtsCardData = [
  {
    title: 'Custom Training',
    description:
      'Train your chatbot using internal documents, wikis, product manuals, links, and FAQs—no coding required.',
    icon: <BookOpen className="h-10 w-10 text-pink-600" />,
  },
  {
    title: 'Multi-Platform Integration',
    description:
      'Deploy your chatbot effortlessly on your website, Slack, WhatsApp, Telegram, and more using our versatile APIs and widgets.',
    icon: <Share2 className="h-10 w-10 text-green-600" />,
  },
  {
    title: 'Scalable & Secure',
    description:
      'Our platform ensures your chatbot is always up-to-date and secure, ready to handle any customer query.',
    icon: <Shield className="h-10 w-10 text-blue-600" />,
  },
]

export const useCaseData = [
  {
    title: 'Empower Your Chatbot with Your Knowledge Base',
    description:
      'Upload your PDFs, internal docs, product manuals, and URLs. Our AI instantly learns from your data to power accurate, context-aware responses.',
  },
  {
    title: 'Customize & Preview',
    description:
      'Personalize the chatbot’s look and feel—logo, color, avatar, and tone. See live previews to match your brand perfectly',
  },
  {
    title: 'Integrate Anywhere',
    description:
      'Add it to your website with a chat popover, or use our API. Connect effortlessly to platforms like Slack, WhatsApp, and Telegram.',
  },
  {
    title: 'Monitor & Improve',
    description:
      'Track messages, engagement, and user behavior in real-time. Refine responses with insights and boost performance continuously.',
  },
]
