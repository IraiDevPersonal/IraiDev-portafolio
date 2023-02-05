import { CreatedBy } from './'

import reactSVG from '../../assets/svg/react.svg'
import tailwindSVG from '../../assets/svg/tailwindcss-icon.svg'

export function PortFolioFooter() {
   return (
      <footer className="flex flex-wrap gap-4 justify-around items-center dark:bg-slate-900 bg-slate-50 p-5">
         <div>
            <span>Creado por: IraiDev - Ignacio Arriagada 🧑‍💻</span>
         </div>
         <div className="flex flex-col items-center gap-4">
            <h5>Creado con</h5>
            <section className="flex justify-center gap-4">
               <CreatedBy svg={reactSVG} label="ReactJS" animate="spin" />
               <CreatedBy
                  svg={tailwindSVG}
                  label="Tailwind CSS"
                  animate="pulse"
                  animateDuration={3000}
               />
            </section>
         </div>
      </footer>
   )
}
