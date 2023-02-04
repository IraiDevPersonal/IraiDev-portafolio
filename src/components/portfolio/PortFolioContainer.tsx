import { ReactNode } from 'react'
import { PortFolioFooter } from './PortFolioFooter'
import { PortFolioHeader } from './PortFolioHeader'

interface Props {
   children: ReactNode
}

export function PortFolioContainer({ children }: Props) {
   return (
      <div className="relative container mx-auto max-w-5xl lg:rounded-lg bg-slate-800 shadow-xl overflow-hidden lg:border border-slate-700 opacity-80">
         <PortFolioHeader />
         <section className="space-y-8 p-5">{children}</section>
         <PortFolioFooter />
      </div>
   )
}
