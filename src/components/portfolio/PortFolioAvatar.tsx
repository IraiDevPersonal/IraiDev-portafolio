import avatar from '../../assets/images/avatar.jpeg'
import { EMAIL, PHONE } from '../../utils/constants'
import { ClipBoard } from '../ui'

export function PortFolioAvatar() {
   return (
      <div className="flex flex-col items-center">
         <img
            className="h-32 w-32 rounded-full border-2 dark:border-slate-300 border-white shadow-lg mb-4"
            src={avatar}
            alt="Avatar"
         />
         <h1 className="font-semibold text-lg">Ignacio Arriagada</h1>
         <span className="dark:text-slate-300 text-slate-500 text-sm mb-1">
            Front-End Developer
         </span>
         <ClipBoard clipboard={EMAIL}>
            <span className="text-slate-500 dark:group-hover:text-slate-300 group-hover:text-slate-600 text-xs">
               {EMAIL}
            </span>
         </ClipBoard>
         <ClipBoard clipboard={PHONE}>
            <span className="text-slate-500 dark:group-hover:text-slate-300 group-hover:text-slate-600 text-xs">
               {PHONE}
            </span>
         </ClipBoard>
      </div>
   )
}
