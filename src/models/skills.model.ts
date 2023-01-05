import { DevSkillItemProps, SoftSkillItemProps } from '../pages/home/components'

type Key = string | number

export interface DevSkillProps extends DevSkillItemProps {
   key: Key
}

export interface SoftSkillProps extends SoftSkillItemProps {
   key: Key
}
