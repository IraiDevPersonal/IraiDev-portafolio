import { FunctionComponent } from 'react'

export function skillsList<T extends JSX.IntrinsicAttributes>(
   Component: FunctionComponent<T>,
   list: T[],
   title: string
) {
   return function () {
      return (
         <section className="max-w-xl mx-auto">
            <header className="border-t py-4 border-slate-600">
               <h5 className="font-semibold text-lg text-center">{title}</h5>
            </header>
            <ul className="flex flex-wrap gap-2 justify-center">
               {list.map((item) => (
                  <Component key={item.key} {...item} />
               ))}
            </ul>
         </section>
      )
   }
}
