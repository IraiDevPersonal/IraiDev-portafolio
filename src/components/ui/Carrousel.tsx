import {
   useState,
   createRef,
   useEffect,
   useCallback,
   forwardRef,
   LegacyRef,
   ReactNode,
} from 'react'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'
import './Carrousel.css'

type Ref = LegacyRef<HTMLInputElement> | undefined

interface Props {
   images: string[]
   autorun?: boolean
   autorunTime?: number
   children?: (props: { slideId: number }) => ReactNode
}

export function Carousel({
   images = [],
   autorun = false,
   autorunTime = 3000,
   children = () => null,
}: Props) {
   const [currentImg, setCurrentImg] = useState<number>(0)

   const totalImages = images.length

   // arreglo de referencias
   const refs = images.reduce((acc: any, _, idx) => {
      acc[idx] = createRef()
      return acc
   }, {})

   const scrollToImage = useCallback(
      (i: number) => {
         setCurrentImg(i)

         refs[i].current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'start',
         })
      },
      [refs]
   )

   const nextImage = useCallback(() => {
      if (currentImg >= totalImages - 1) {
         scrollToImage(0)
      } else {
         scrollToImage(currentImg + 1)
      }
   }, [currentImg, scrollToImage, totalImages])

   const previousImage = useCallback(() => {
      if (currentImg === 0) {
         scrollToImage(totalImages - 1)
      } else {
         scrollToImage(currentImg - 1)
      }
   }, [currentImg, scrollToImage, totalImages])

   useEffect(() => {
      if (!autorun) return

      const autoPlay = setInterval(() => {
         nextImage()
      }, autorunTime)

      return () => {
         clearInterval(autoPlay)
      }
   }, [autorun, nextImage, autorunTime])

   return (
      <div className="flex justify-center w-full items-center px-10">
         <div className="relative w-full group">
            <section className="flex justify-between items-center w-full px-3 absolute top-1/2 transform -translate-y-1/2 z-20 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-500">
               <button
                  className="h-10 w-10 grid place-content-center rounded-full bg-gray-500/30 text-white hover:bg-gray-500/40 transition-colors"
                  onClick={previousImage}
               >
                  <HiOutlineChevronLeft />
               </button>
               <button
                  className="h-10 w-10 grid place-content-center rounded-full bg-gray-500/30 text-white hover:bg-gray-500/40 transition-colors"
                  onClick={nextImage}
               >
                  <HiOutlineChevronRight />
               </button>
            </section>
            <section className="carousel rounded-app aspect-[16/9]">
               {images.map((img, idx) => (
                  <SlideItem key={idx} ref={refs[idx]} img={img} slideNumber={idx + 1}>
                     {children!!({ slideId: idx })}
                  </SlideItem>
               ))}
            </section>
            <footer className="flex gap-2 justify-center flex-wrap absolute bottom-3 w-full">
               {images.map((_, idx) => (
                  <button
                     key={idx}
                     className={`h-2 w-2 rounded-md  outline-none transition-all duration-500 ${
                        idx === currentImg ? 'scale-150 bg-gray-700' : 'bg-gray-500'
                     }`}
                     onClick={() => scrollToImage(idx)}
                  ></button>
               ))}
            </footer>
         </div>
      </div>
   )
}

interface SlideProps {
   img: string
   slideNumber: number
   banner?: ReactNode
   children?: ReactNode
}

const SlideItem = forwardRef(({ img, slideNumber, children, banner }: SlideProps, ref: Ref) => {
   return (
      <div
         className="w-full flex-shrink-0 relative overflow-hidden rounded-xl"
         key={img}
         ref={ref}
      >
         {banner && (
            <span className="absolute top-0 h-16 w-full bg-black text-white text-2xl flex items-center px-6">
               {banner}
            </span>
         )}
         {children}
         <img
            src={img}
            className="object-cover object-left-top aspect-[16/9]"
            alt={`destacado-${slideNumber}`}
         />
      </div>
   )
})
