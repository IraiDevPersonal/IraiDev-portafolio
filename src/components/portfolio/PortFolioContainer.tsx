import { ReactNode } from 'react'
import { PortFolioFooter } from './PortFolioFooter'
import { PortFolioHeader } from './PortFolioHeader'

interface Props {
   children: ReactNode
}

export function PortFolioContainer({ children }: Props) {
   return (
      <div className="relative container mx-auto max-w-5xl lg:rounded-lg dark:bg-slate-800 bg-slate-100 shadow-xl overflow-hidden lg:border dark:border-slate-700 border-slate-300 opacity-80">
         <PortFolioHeader />
         <section className="space-y-8 p-5">{children}</section>
         <PortFolioFooter />
      </div>
   )
}
