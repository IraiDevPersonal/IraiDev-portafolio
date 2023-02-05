import { useMemo } from 'react'
import { HiOutlineStar, HiStar } from 'react-icons/hi'

export interface DevSkillItemProps {
   svg: string
   title: string
   level: 'Basico' | 'Intermedio' | 'Avanzado'
}

export function DevSkillItem({ level, svg, title }: DevSkillItemProps) {
   const starLevel: boolean[] = useMemo(() => {
      if (level === 'Avanzado') return [true, true, true]
      if (level === 'Intermedio') return [true, true, false]
      return [true, false, false]
   }, [level])

   return (
      <li className="flex flex-col items-center dark:bg-slate-900 bg-slate-200 p-4 rounded-lg border border-transparent dark:hover:border-slate-600 hover:border-slate-400 dark:hover:bg-slate-800 hover:bg-slate-300 hover:scale-110 transition-all ease-linear">
         <img className="mb-2 h-14 w-14" src={svg} alt="logo" />
         <h5 className="text-sm font-medium dark:text-slate-200 text-slate-700">{title}</h5>
         <span className="text-xs text-slate-500">{level}</span>
         <span className="flex gap-1 text-sm">
            {starLevel.map((isTrue) => (isTrue ? <HiStar /> : <HiOutlineStar />))}
         </span>
      </li>
   )
}
