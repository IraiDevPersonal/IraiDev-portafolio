import { ElementType, Fragment, ReactNode, useMemo } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { HiOutlineX } from 'react-icons/hi'

interface Props {
   as?: ElementType
   open: boolean
   backdropCloseModal?: boolean
   title?: ReactNode
   actions?: ReactNode
   children: ReactNode
   onClose: () => void
   onSubmit?: () => void
}

const BACKDROP_STYLES = {
   enter: 'ease-out duration-300',
   enterFrom: 'opacity-0',
   enterTo: 'opacity-100',
   leave: 'ease-in duration-200',
   leaveFrom: 'opacity-100',
   leaveTo: 'opacity-0',
}

const MODAL_STYLES = {
   enter: 'ease-out duration-300',
   enterFrom: 'opacity-0 scale-95',
   enterTo: 'opacity-100 scale-100',
   leave: 'ease-in duration-200',
   leaveFrom: 'opacity-100 scale-100',
   leaveTo: 'opacity-0 scale-95',
}

export function Modal({
   as = 'div',
   open,
   title,
   actions,
   children,
   backdropCloseModal = true,
   onClose,
   onSubmit,
}: Props) {
   // ? control de estado para dar un retraso de 300ms para no ver la animacion de cerrado.
   const isOpen = useMemo(() => {
      if (!open) {
         setTimeout(() => {
            return false
         }, 300)
      }
      return true
   }, [open])

   const handleClose = () => {
      backdropCloseModal && onClose()
   }
   return (
      <Transition appear show={open} as={Fragment}>
         <Dialog as={as} onSubmit={onSubmit} className="relative z-40" onClose={handleClose}>
            <Transition.Child as={Fragment} {...BACKDROP_STYLES}>
               <div className="fixed inset-0 dark:bg-black/50 bg-white/70 z-40" />
            </Transition.Child>
            <div className="fixed inset-0 scroll-app z-40">
               <div className="flex min-h-full items-center justify-center">
                  <Transition.Child as={Fragment} {...MODAL_STYLES}>
                     <Dialog.Panel className={`relative w-full p-2 bg-transparent max-w-5xl`}>
                        <button
                           onClick={onClose}
                           className="grid place-content-center rounded-full outline-none dark:text-slate-100 text-slate-500 dark:bg-slate-700 bg-slate-50 dark:hover:bg-red-500 hover:bg-red-500 transition-colors hover:text-white shadow-md dark:shadow-slate-800 h-7 w-[29px] absolute z-40 top-0 right-0"
                        >
                           <HiOutlineX className="h-5 w-5" />
                        </button>
                        <div className="w-full dark:bg-slate-900 bg-slate-50 rounded-lg transform align-middle shadow-xl dark:shadow-slate-900 divide-y dark:divide-slate-700 divide-slate-200 border dark:border-slate-700 border-slate-200 overflow-hidden">
                           {Boolean(title) && (
                              <Dialog.Title
                                 as="h3"
                                 className="text-xl font-medium dark:text-slate-100 text-slate-700 text-left p-5"
                              >
                                 {title}
                              </Dialog.Title>
                           )}
                           <main className="p-5 max-h-[80vh] scroll-app">
                              {isOpen && children}
                           </main>
                           {Boolean(actions) && (
                              <footer className="flex justify-end items-center gap-1 p-3">
                                 {actions}
                              </footer>
                           )}
                        </div>
                     </Dialog.Panel>
                  </Transition.Child>
               </div>
            </div>
         </Dialog>
      </Transition>
   )
}
