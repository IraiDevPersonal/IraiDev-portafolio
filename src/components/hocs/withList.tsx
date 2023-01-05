import { FunctionComponent, useMemo } from 'react'

export function withList<T extends JSX.IntrinsicAttributes>(
   Component: FunctionComponent<T>,
   list: T[],
   title: string,
   orientation: 'vertical' | 'horizontal' = 'horizontal'
) {
   return function () {
      const selectedOrientacion = useMemo(() => {
         if (orientation === 'horizontal') return 'flex flex-wrap justify-center gap-2'
         return 'flex flex-col'
      }, [])
      return (
         <section className="max-w-xl mx-auto">
            <header className="border-t py-4 border-slate-600">
               <h5 className="font-semibold text-lg text-center">{title}</h5>
            </header>
            <ul className={`${selectedOrientacion}`}>
               {list.map((item) => (
                  <Component key={item.key} {...item} />
               ))}
            </ul>
         </section>
      )
   }
}
