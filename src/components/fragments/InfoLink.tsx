import { IconTypes } from 'solid-icons'
import { FaSolidArrowUpRightFromSquare } from 'solid-icons/fa'

export interface InfoLinkProps {
  icon: IconTypes
  value: string
  link: string
}

export const InfoLink = (props: InfoLinkProps) => {
  const { icon: Icon, value, link } = props
  return (
    <a target="_blank" href={link} class="text-outline hover:text-primary flex flex-row items-center w-full my-2">
      <Icon size={20} />
      <span class="ml-2 mr-auto">{value}</span>
      <FaSolidArrowUpRightFromSquare />
    </a>
  )
}
