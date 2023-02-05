import { useState } from 'react'
import { Carousel, Modal } from '../../../components/ui'

export interface ProjectItemProps {
   img: string
   title: string
   dataset: string[]
}

export function ProjectItem({ img, title, dataset }: ProjectItemProps) {
   const [isOpen, setIsOpen] = useState(false)
   return (
      <>
         <li
            onClick={() => setIsOpen(true)}
            className="flex flex-col gap-4 items-center p-3 rounded-lg border dark:border-slate-700 border-slate-300 dark:bg-slate-900 bg-slate-200 w-max hover:scale-105 transition-transform hover:cursor-pointer"
         >
            <img className="w-52 h-32 object-cover rounded-md" src={img} alt={title} />
            <span className="font-semibold text-center text-sm">{title}</span>
         </li>
         <Modal open={isOpen} onClose={() => setIsOpen(false)} title={title}>
            <section>
               <Carousel images={dataset} autorun />
            </section>
         </Modal>
      </>
   )
}
