import { MainLayout } from '../../components/layouts'
import {
   DevSkillItem,
   PortFolioContainer,
   PortFolioHeader,
   AboutMe,
   SoftSkillItem,
} from './components'
import { skillsList } from '../../components/hocs'
import uuid from 'react-id-generator'

import tailwind from '../../assets/svg/tailwindcss-icon.svg'
import reactJS from '../../assets/svg/react.svg'
import materialUI from '../../assets/svg/material-ui.svg'
import redux from '../../assets/svg/redux.svg'
import html from '../../assets/svg/html.svg'
import css from '../../assets/svg/css.svg'
import typestript from '../../assets/svg/typescript.svg'
import javascript from '../../assets/svg/javascript.svg'
import git from '../../assets/svg/git.svg'

import { BsPersonCheckFill } from 'react-icons/bs'
import { BiChip } from 'react-icons/bi'
import { FaRegHandshake, FaUserGraduate } from 'react-icons/fa'
import { DevSkillProps, SoftSkillProps } from '../../models'

const DEV_SKILLS: DevSkillProps[] = [
   { key: uuid(), title: 'ReactJS', svg: reactJS, level: 'Intermedio' },
   { key: uuid(), title: 'Javascript', svg: javascript, level: 'Intermedio' },
   { key: uuid(), title: 'Typescript', svg: typestript, level: 'Intermedio' },
   { key: uuid(), title: 'HTML5', svg: html, level: 'Intermedio' },
   { key: uuid(), title: 'CSS3', svg: css, level: 'Basico' },
   { key: uuid(), title: 'Tailwind', svg: tailwind, level: 'Intermedio' },
   { key: uuid(), title: 'Material UI', svg: materialUI, level: 'Intermedio' },
   { key: uuid(), title: 'Redux', svg: redux, level: 'Basico' },
   { key: uuid(), title: 'Git', svg: git, level: 'Basico' },
]

const SOFT_SKILLS: SoftSkillProps[] = [
   { key: uuid(), content: 'Autodidacta', icon: <FaUserGraduate /> },
   { key: uuid(), content: 'Resolución de problemas', icon: <BiChip /> },
   { key: uuid(), content: 'Responsabilidad', icon: <BsPersonCheckFill /> },
   { key: uuid(), content: 'Abierto a ideas', icon: <FaRegHandshake /> },
]

const WithDevSkills = skillsList<DevSkillProps>(DevSkillItem, DEV_SKILLS, 'Habilidades como DEV')
const WithSoftSkills = skillsList<SoftSkillProps>(
   SoftSkillItem,
   SOFT_SKILLS,
   'Habilidades blandas'
)

export default function HomePage() {
   return (
      <MainLayout title="Home">
         <PortFolioContainer>
            <PortFolioHeader />
            <section className="space-y-4 p-5">
               <AboutMe />
               <WithDevSkills />
               <WithSoftSkills />
            </section>
         </PortFolioContainer>
      </MainLayout>
   )
}
