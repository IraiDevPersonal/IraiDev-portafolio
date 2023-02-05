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
      <div className="group flex w-max items-center gap-3 dark:hover:bg-slate-700 hover:bg-slate-200 transition-all duration-300 ease-in-out px-2 py-1 rounded-md">
         {children}
         <button
            className="hidden group-hover:block opacity-0 group-hover:opacity-100 outline-none"
            title="Copiar en portapapeles"
            onClick={handleCopy}
         >
            <HiClipboardList className="dark:text-slate-500 text-slate-400 dark:hover:text-slate-200 hover:text-slate-700 cursor-pointer transition-colors" />
         </button>
      </div>
   )
}
