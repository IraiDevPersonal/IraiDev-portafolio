import { Link, Navbar } from '../../../components/ui'
import { PortFolioAvatar, DownloadCV, LinkeIn } from './'

import { HiUserCircle } from 'react-icons/hi'
import { BiCodeAlt } from 'react-icons/bi'

export function PortFolioHeader() {
   return (
      <header className="flex flex-col gap-4 justify-center bg-slate-900 p-5">
         <PortFolioAvatar />
         <span className="absolute top-5 right-5">
            <DownloadCV />
         </span>
         <span className="absolute mt-1 top-16 right-5">
            <LinkeIn />
         </span>
         <Navbar>
            <Link to="/" label="Sobre me" icon={<HiUserCircle />} />
            <Link to="/proyectos" label="Proyectos" icon={<BiCodeAlt />} />
         </Navbar>
      </header>
   )
}
