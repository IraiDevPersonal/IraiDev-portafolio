import { ReactNode } from 'react'
import {
   DiCss3,
   DiGithubBadge,
   DiHtml5,
   DiJsBadge,
   DiReact,
   DiVisualstudio,
} from 'react-icons/di'
import { SiTailwindcss, SiTypescript } from 'react-icons/si'
import { BiCodeAlt } from 'react-icons/bi'
import uuid from 'react-id-generator'
import './AnimatedBackground.css'

interface TechProps {
   key: string
   icon: ReactNode
   animationDuration: number
   left: number
}

const generateRandomNumber = (min: number, max: number) => {
   let numPosibility = max - min
   let random = Math.random() * (numPosibility + 1)
   random = parseInt(Math.floor(random).toString())
   return min + random
}

const TECHNOLOGIES: TechProps[] = [
   // {
   //    key: uuid(),
   //    icon: <DiChrome />,
   //    animationDuration: generateRandomNumber(13, 24),
   //    left: 5,
   // },
   {
      key: uuid(),
      icon: <SiTailwindcss />,
      animationDuration: generateRandomNumber(13, 24),
      left: 5,
   },
   {
      key: uuid(),
      icon: <BiCodeAlt />,
      animationDuration: generateRandomNumber(13, 24),
      left: 10,
   },
   {
      key: uuid(),
      icon: <SiTypescript />,
      animationDuration: generateRandomNumber(13, 24),
      left: 15,
   },
   {
      key: uuid(),
      icon: <DiCss3 />,
      animationDuration: generateRandomNumber(13, 24),
      left: 20,
   },
   {
      key: uuid(),
      icon: <DiGithubBadge />,
      animationDuration: generateRandomNumber(13, 24),
      left: 25,
   },
   {
      key: uuid(),
      icon: <DiHtml5 />,
      animationDuration: generateRandomNumber(13, 24),
      left: 30,
   },
   {
      key: uuid(),
      icon: <DiJsBadge />,
      animationDuration: generateRandomNumber(13, 24),
      left: 35,
   },
   {
      key: uuid(),
      icon: <DiReact />,
      animationDuration: generateRandomNumber(13, 24),
      left: 40,
   },
   {
      key: uuid(),
      icon: <DiVisualstudio />,
      animationDuration: generateRandomNumber(13, 24),
      left: 45,
   },
   {
      key: uuid(),
      icon: <SiTailwindcss />,
      animationDuration: generateRandomNumber(13, 24),
      left: 50,
   },
   {
      key: uuid(),
      icon: <BiCodeAlt />,
      animationDuration: generateRandomNumber(13, 24),
      left: 55,
   },
   {
      key: uuid(),
      icon: <SiTypescript />,
      animationDuration: generateRandomNumber(13, 24),
      left: 60,
   },
   {
      key: uuid(),
      icon: <DiCss3 />,
      animationDuration: generateRandomNumber(13, 24),
      left: 65,
   },
   {
      key: uuid(),
      icon: <DiGithubBadge />,
      animationDuration: generateRandomNumber(13, 24),
      left: 70,
   },
   {
      key: uuid(),
      icon: <DiHtml5 />,
      animationDuration: generateRandomNumber(13, 24),
      left: 75,
   },
   {
      key: uuid(),
      icon: <DiJsBadge />,
      animationDuration: generateRandomNumber(13, 24),
      left: 80,
   },
   {
      key: uuid(),
      icon: <SiTypescript />,
      animationDuration: generateRandomNumber(13, 24),
      left: 85,
   },
   {
      key: uuid(),
      icon: <DiCss3 />,
      animationDuration: generateRandomNumber(13, 24),
      left: 90,
   },
   {
      key: uuid(),
      icon: <DiVisualstudio />,
      animationDuration: generateRandomNumber(13, 24),
      left: 95,
   },
]

export function AnimatedBackground() {
   return (
      <div className="fixed inset-0">
         <section className="min-h-screen w-full mx-auto relative text-4xl text-slate-800">
            {TECHNOLOGIES.map((tech) => (
               <span
                  className="floating_chars"
                  key={tech.key}
                  style={{
                     animationDuration: `${tech.animationDuration}s`,
                     left: `${tech.left}%`,
                  }}
               >
                  {tech.icon}
               </span>
            ))}
         </section>
      </div>
   )
}
