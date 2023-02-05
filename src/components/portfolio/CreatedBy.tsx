import { useMemo } from 'react'
interface Props {
   svg: string
   label: string
   animateDuration?: number
   animate?: 'spin' | 'none' | 'pulse'
}

export function CreatedBy({ svg, animate = 'none', label, animateDuration = 5000 }: Props) {
   const selectedAnimate = useMemo(() => {
      if (animate === 'pulse') return 'animate-pulse'
      if (animate === 'spin') return 'animate-spin'
      return 'animate-none'
   }, [animate])

   return (
      <div className="flex flex-col items-center gap-4">
         <img
            style={{ animationDuration: `${animateDuration}ms` }}
            className={`h-14 w-14 ${selectedAnimate}`}
            src={svg}
            alt="logo"
         />
         <span className="text-xs dark:text-slate-400 text-slate-500">{label}</span>
      </div>
   )
}
