import { ReactNode, useEffect } from 'react'

interface Props {
   children: ReactNode
   title: string
}

export function MainLayout({ children, title }: Props) {
   useEffect(() => {
      document.title = `IraiDev | ${title}`
   }, [title])

   return (
      <main className="min-h-screen w-full lg:py-10 bg-slate-900 text-slate-100 transition-all">
         {children}
      </main>
   )
}
