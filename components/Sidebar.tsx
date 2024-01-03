'use client';

import Image from "next/image";
import Link from "next/link";

import { Montserrat } from "next/font/google";

import { cn } from "@/lib/utils";
import { CodeIcon, ImageIcon, LayoutDashboard, MessageSquare, MusicIcon, Settings, VideoIcon } from "lucide-react";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });

const routes = [
    {
        label: 'Dashboard',
        icon: LayoutDashboard,
        href: '/dashboard',
        color: 'text-sky-500',
    },{
        label: 'Conversation',
        icon: MessageSquare,
        href: '/dashboard/conversation',
        color: 'text-violet-500',
    },{
        label: 'Image Generation',
        icon: ImageIcon,
        href: '/dashboard/image',
        color: 'text-pink-500',
    },{
        label: 'Video Generation',
        icon: VideoIcon,
        href: '/video',
        color: 'text-Orange-700',
    },{
        label: 'Music Generation',
        icon: MusicIcon,
        href: '/music',
        color: 'text-emerald-500',
    },{
        label: 'Code Generation',
        icon: CodeIcon,
        href: '/code',
        color: 'text-green-700',
    },{
        label: 'Settings',
        icon: Settings,
        href: '/settings',
    },
]

const SideBar = () => {
    const pathname = usePathname()
    return (
        <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
            <div className="px-3 py-2 flex-1">
                <Link href='/dashboard' className="flex items-center pl-3 mb-14">
                    <div className="relative h-8 w-8 mr-4">
                        <Image
                            fill
                            alt="logo"
                            src='/logo.jpg'
                        />
                    </div>
                    <h1 className={cn("text-2xl font-bold", montserrat.className)}>
                        Addips
                    </h1>
                </Link>
                <div className="space-y-1">
                    {routes.map((routes) => (
                        <Link
                            href={routes.href}
                            key={routes.href}
                            className={cn("text-sm w-full justify-start cursor-pointer group flex p-3 font-medium hover:text-white hover:bg-white/10 rounded-lg transition", pathname === routes.href ? "text-white bg-white/10" : "text-zinc-400")}
                        >
                            <div className="flex items-center flex-1">
                                <routes.icon className={cn('h-5 w-5 mr-3', routes.color)}/>
                                {routes.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default SideBar;