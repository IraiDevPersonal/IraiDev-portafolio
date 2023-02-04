import { BiLoaderAlt } from 'react-icons/bi'

export function Fallback() {
   return (
      <main className="h-screen bg-slate-800 text-slate-300 grid place-content-center">
         <div>
            <BiLoaderAlt className="text-5xl animate-spin" />
         </div>
      </main>
   )
}
