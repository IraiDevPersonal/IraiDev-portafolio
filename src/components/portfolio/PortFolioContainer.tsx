import { ReactNode } from 'react'

interface Props {
   children: ReactNode
}

export function PortFolioContainer({ children }: Props) {
   return (
      <div className="relative container mx-auto max-w-5xl lg:rounded-md bg-slate-800 shadow-xl overflow-hidden lg:border border-slate-700">
         {children}
      </div>
   )
}
