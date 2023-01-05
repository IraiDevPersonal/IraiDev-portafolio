import { FaLinkedin } from 'react-icons/fa'

export function LinkedInLink() {
   return (
      <a
         title="Descargar CURRICULUM VITAE"
         className="text-slate-400 h-9 w-9 grid place-content-center sm:block sm:h-auto sm:w-max sm:py-1.5 sm:px-3 rounded-full overflow-hidden group relative border-2 border-slate-700 hover:border-blue-600 hover:text-white"
         href="https://www.linkedin.com/in/ignacio-arriagada-iriarte-68ba1425b/"
         target="_blank"
         rel="noreferrer"
      >
         <span className="absolute z-10 bg-blue-600 right-full rounded-full top-0 group-hover:translate-x-full transition-transition duration-500 block h-full w-full" />
         <span className="relative flex items-center gap-3 z-20 w-full h-full">
            <label className="hidden sm:block cursor-pointer">Perfil LinkedIn</label>
            <FaLinkedin className="text-lg" />
         </span>
      </a>
   )
}
