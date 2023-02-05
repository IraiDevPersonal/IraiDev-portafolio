import { ReactNode } from 'react'

export interface SoftSkillItemProps {
   content: string
   icon: ReactNode
}

export function SoftSkillItem({ content, icon }: SoftSkillItemProps) {
   return (
      <li className="dark:bg-slate-900 bg-slate-200 py-2 px-4 rounded-md flex items-center gap-3 dark:text-slate-300 text-slate-600">
         <span className="text-xl">{icon}</span>
         <span className="border-l border-slate-600 pl-3">{content}</span>
      </li>
   )
}
