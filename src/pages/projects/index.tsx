import { MainLayout } from '../../components/layouts'
import { PortFolioContainer } from '../../components/portfolio'
import { ProjectItem } from './components'
import { withList } from '../../components/hocs'
import uuid from 'react-id-generator'
import { ProjectsProps } from '../../models'

const PROJECTS: ProjectsProps[] = [
   {
      key: uuid(),
      img: 'https://res.cloudinary.com/dkbd8epe5/image/upload/v1673715411/portfolio-projects/todo-v2-2-min_rtgyff.png',
      title: 'Control de actividades (MSC)',
      dataset: [
         'https://res.cloudinary.com/dkbd8epe5/image/upload/v1673715411/portfolio-projects/todo-v2-2-min_rtgyff.png',
         'https://res.cloudinary.com/dkbd8epe5/image/upload/v1673715411/portfolio-projects/todo-v2-filters-min_mxma7b.png',
         'https://res.cloudinary.com/dkbd8epe5/image/upload/v1673715411/portfolio-projects/todo-v2-table-min_vxxxch.png',
         'https://res.cloudinary.com/dkbd8epe5/image/upload/v1673715411/portfolio-projects/todo-v2-detail-min_p7wigk.png',
      ],
   },
   {
      key: uuid(),
      img: 'https://res.cloudinary.com/dkbd8epe5/image/upload/v1673715020/portfolio-projects/ticket-login-min_vcp1dd.png',
      title: 'Plataforma Clientes',
      dataset: [
         'https://res.cloudinary.com/dkbd8epe5/image/upload/v1673714725/portfolio-projects/tickets_gvsmqx.jpg',
         'https://res.cloudinary.com/dkbd8epe5/image/upload/v1673714725/portfolio-projects/tickets-filter_gyvi3k.jpg',
         'https://res.cloudinary.com/dkbd8epe5/image/upload/v1673714725/portfolio-projects/new-ticket_gsuej1.jpg',
         'https://res.cloudinary.com/dkbd8epe5/image/upload/v1673714725/portfolio-projects/tickets-detail_nuaj9d.jpg',
      ],
   },
   {
      key: uuid(),
      img: 'https://res.cloudinary.com/dkbd8epe5/image/upload/v1673715925/portfolio-projects/picoltue-login-min_hfmbke.png',
      title: 'Picoltue (cosechas)',
      dataset: [
         'https://res.cloudinary.com/dkbd8epe5/image/upload/v1673715925/portfolio-projects/picoltue-login-min_hfmbke.png',
         'https://res.cloudinary.com/dkbd8epe5/image/upload/v1673715920/portfolio-projects/picoltue-home-min_lnterp.jpg',
         'https://res.cloudinary.com/dkbd8epe5/image/upload/v1673715920/portfolio-projects/picoltue-filters-min_i4igcr.jpg',
      ],
   },
]

const WithProjects = withList<ProjectsProps>(ProjectItem, PROJECTS, 'Algunos proyectos')

export default function ProjectPage() {
   return (
      <MainLayout title="Proyectos">
         <PortFolioContainer>
            <WithProjects />
         </PortFolioContainer>
      </MainLayout>
   )
}
