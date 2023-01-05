export interface StudyHistoryItemProps {
   date: string
   title: string
   description: string
   institution: string
}

export function StudyHistpryitem({
   title,
   description,
   date,
   institution,
}: StudyHistoryItemProps) {
   return (
      <li className="flex flex-col gap-3 min-w-full border-l border-slate-500 pl-10 pt-4 relative">
         <span className="absolute top-7 left-0 border-t border-slate-500 w-5" />
         <span className="absolute top-7 left-5 transform -translate-y-1/2 block h-2 w-2 bg-blue-300 rounded-full" />
         <header className="flex items-center justify-between gap-3">
            <h5 className="font-semibold">
               {title} - ({institution})
            </h5>
         </header>
         <section className="text-slate-400 text-sm pl-2">
            <p>{description}</p>
            <span className="text-slate-500 text-xs">{date}</span>
         </section>
      </li>
   )
}
