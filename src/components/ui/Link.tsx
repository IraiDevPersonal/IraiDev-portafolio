import { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

interface Props {
   to: string
   label: string
   icon: ReactNode
}

export function Link({ to, icon, label }: Props) {
   return (
      <NavLink to={to}>
         {({ isActive }) => (
            <div
               className={`
                  flex items-center gap-3 hover:bg-slate-800 transition-all relative py-2 px-4 group
                  ${isActive ? 'text-blue-300' : 'text-slate-500'}
               `}
            >
               <span className="text-lg">{icon}</span>
               <label className="block cursor-pointer">{label}</label>
               <span
                  className={`
                  block h-0.5 w-full absolute top-full left-0 bg-blue-300
                  ${isActive ? 'scale-100' : 'opacity-0 group-hover:opacity-20'}
               `}
               />
            </div>
         )}
      </NavLink>
   )
}
