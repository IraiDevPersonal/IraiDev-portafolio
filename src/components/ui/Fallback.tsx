import { BiLoaderAlt } from 'react-icons/bi'

export function Fallback() {
   return (
      <main className="h-screen dark:bg-slate-800 bg-slate-50 dark:text-slate-300 text-slate-800 grid place-content-center">
         <div>
            <BiLoaderAlt className="text-5xl animate-spin" />
         </div>
      </main>
   )
}
