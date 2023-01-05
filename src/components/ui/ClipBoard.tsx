import { ReactNode } from 'react'
import { HiClipboardList } from 'react-icons/hi'

interface Props {
   children: ReactNode
   clipboard: string
}

export function ClipBoard({ children, clipboard }: Props) {
   const handleCopy = () => {
      navigator.clipboard.writeText(clipboard)
   }

   return (
      <div className="group flex w-max items-center gap-3 hover:bg-slate-800 transition-all duration-300 ease-in-out px-2 py-1 rounded-md">
         {children}
         <button
            className="hidden group-hover:block opacity-0 group-hover:opacity-100 outline-none"
            title="Copiar en portapapeles"
            onClick={handleCopy}
         >
            <HiClipboardList className="text-slate-600 hover:text-slate-200 cursor-pointer transition-colors" />
         </button>
      </div>
   )
}
