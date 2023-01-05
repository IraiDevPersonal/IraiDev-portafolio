import { ReactNode } from 'react'

interface Props {
   children: ReactNode
}

export function Navbar({ children }: Props) {
   return (
      <nav>
         <div className="flex items-center justify-center bg-transparent h-auto w-full">
            {children}
         </div>
      </nav>
   )
}
