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
                  flex items-center gap-3 dark:hover:bg-slate-800 hover:bg-slate-200/60 transition-all relative py-2 px-4 group
                  ${
                     isActive
                        ? 'dark:text-blue-300 text-blue-400'
                        : 'dark:text-slate-500 text-slate-600'
                  }
               `}
            >
               <span className="text-lg">{icon}</span>
               <label className="block cursor-pointer">{label}</label>
               <span
                  className={`
                  block h-0.5 w-full absolute top-full left-0 dark:bg-blue-300 bg-blue-400
                  ${isActive ? 'scale-100' : 'opacity-0 group-hover:opacity-20'}
               `}
               />
            </div>
         )}
      </NavLink>
   )
}
