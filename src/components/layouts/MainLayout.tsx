import { ReactNode, useEffect } from 'react'
import { AnimatedBackground } from '../ui'

interface Props {
   children: ReactNode
   title: string
}

export function MainLayout({ children, title }: Props) {
   useEffect(() => {
      document.title = `IraiDev | ${title}`
   }, [title])

   return (
      <main className="min-h-screen w-full lg:py-10 dark:bg-slate-900 bg-slate-100 dark:text-slate-200 text-slate-800 transition-all font-custom overscroll-contain">
         <AnimatedBackground />
         {children}
      </main>
   )
}
