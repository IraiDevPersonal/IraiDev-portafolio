import avatar from '../../../assets/images/avatar.jpeg'
import { ClipBoard } from '../../../components/ui'

const EMAIL = 'ignacio.arr01@gmail.com',
   PHONE = '+569 569 805 65'

export function PortFolioAvatar() {
   return (
      <div className="flex flex-col items-center">
         <img
            className="h-32 w-32 rounded-full border-2 border-slate-200 mb-4"
            src={avatar}
            alt="Avatar"
         />
         <h5 className="font-semibold text-lg">Ignacio Arriagada</h5>
         <span className="text-slate-300 text-sm mb-1">Front-End Developer</span>
         <ClipBoard clipboard={EMAIL}>
            <span className="text-slate-500 group-hover:text-slate-300 text-xs">{EMAIL}</span>
         </ClipBoard>
         <ClipBoard clipboard={PHONE}>
            <span className="text-slate-500 group-hover:text-slate-300 text-xs">{PHONE}</span>
         </ClipBoard>
      </div>
   )
}
