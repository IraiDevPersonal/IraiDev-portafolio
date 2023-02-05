import { FaLinkedin } from 'react-icons/fa'

export function LinkedInLink() {
   return (
      <a
         title="Descargar CURRICULUM VITAE"
         className="text-blue-500 h-9 w-9 grid place-content-center sm:block sm:h-auto sm:w-max sm:py-1.5 sm:px-3 rounded-full overflow-hidden group relative border-2 border-blue-500 hover:text-white"
         href="https://www.linkedin.com/in/ignacio-arriagada-iriarte-68ba1425b/"
         target="_blank"
         rel="noreferrer"
      >
         <span className="absolute z-10 bg-blue-500 right-full rounded-full top-0 group-hover:translate-x-full duration-200 ease-linear block h-full w-full" />
         <span className="relative flex items-center gap-3 z-20 w-full h-full">
            <label className="hidden sm:block cursor-pointer">LinkedIn</label>
            <FaLinkedin className="text-lg" />
         </span>
      </a>
   )
}
