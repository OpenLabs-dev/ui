import { Badge, Card, CardContent, CardHeader } from '@openui-org/react'
import {
  CreditCardIcon,
  FileInputIcon,
  KeyIcon,
  MenuIcon,
  MinimizeIcon,
  NavigationIcon,
} from 'lucide-react'
import Link from 'next/link'

const cards = [
  {
    Icon: KeyIcon,
    title: 'Buttons',
    description: 'Customizable buttons with various styles and sizes.',
    path: '#',
  },
  {
    Icon: FileInputIcon,
    title: 'Inputs',
    description: 'Accessible and stylish form inputs.',
    path: '#',
  },
  {
    Icon: CreditCardIcon,
    title: 'Cards',
    description: 'Versatile card components for displaying content.',
    path: '#',
  },
  {
    Icon: MenuIcon,
    title: 'Dropdowns',
    description: 'Accessible and customizable dropdown menus.',
    path: '#',
  },
  {
    Icon: NavigationIcon,
    title: 'Navigation',
    description: ' Intuitive navigation components for your app.',
    path: '#',
  },
  {
    Icon: MinimizeIcon,
    title: 'Modals',
    description: 'Lightweight and responsive modal components.',
    path: '#',
  },
]

export default function Commons() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge>
              Key components
            </Badge>
            <h2 className="text-3xl font-bold pt-4 pb-2 tracking-tighter sm:text-4xl md:text-5xl">
              Beautifully Designed Components
            </h2>
            <p className="max-w-[900px] text-gray-500 text-base">
              Explore our collection of carefully crafted components that you can use to build your next web application.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-8">
            {cards.map((card, i) => (
              <Link key={i} href={card.path}>
                <Card className="border-none shadow-medium cursor-pointer hover:scale-105 transition-transform h-full">
                  <CardHeader>
                    <card.Icon className="size-8" />
                  </CardHeader>
                  <CardContent>
                    <h3 className="text-lg font-semibold">{card.title}</h3>
                    <p className="text-sm">{card.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}