'use client'

import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ArrowRight, CodeIcon, ImageIcon, MessageSquare, MusicIcon, VideoIcon } from "lucide-react"
import { useRouter } from "next/navigation"


const tools = [
  {
    label: 'Conversation',
    icon: MessageSquare,
    color: 'text-violet-500',
    bgColor: 'bg-violet-500/10',
    href: '/dashboard/conversation'
  },{
    label: 'Image Generation',
    icon: ImageIcon,
    href: '/dashboard/image',
    color: 'text-pink-500',
},{
    label: 'Video Generation',
    icon: VideoIcon,
    href: '/dashboard/video',
    color: 'text-Orange-700',
},{
    label: 'Music Generation',
    icon: MusicIcon,
    href: '/dashboard/music',
    color: 'text-emerald-500',
},{
    label: 'Code Generation',
    icon: CodeIcon,
    href: '/dashboard/code',
    color: 'text-green-700',
  }
]

const DashboardPage = () => {
  const router = useRouter();
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Find out what Addips AI can do
        </h2>
        <p className="text-mute-foreground font-light text-sm md:text-lg text-center">
          Chat with Addips AI - Experience greatness
        </p>
      </div>

      <div className="px-4 space-y-4 md:px-20 lg:px-32">
        {tools.map((tools) => (
          <Card 
            onClick={() => router.push(tools.href)}
            key={tools.href}
            className="p-4 border-black/5 flex items-center justify-between cursor-pointer hover:shadow-md transition"
          >
            <div className="gap-x-4 flex items-center">
              <div className={cn('p-2 w-fit rounded-md', tools.bgColor)}>
                <tools.icon className={cn('w-8 h-8', tools.color)}/>
              </div>

              <div className="font-semibold">
                {tools.label}
              </div> 
            </div>
            <ArrowRight className="h-5 w-5"/>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default DashboardPage;