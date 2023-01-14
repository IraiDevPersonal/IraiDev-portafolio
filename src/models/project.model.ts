import { ProjectItemProps } from '../pages/projects/components'

type Key = string | number

export interface ProjectsProps extends ProjectItemProps {
   key: Key
}
