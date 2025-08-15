import { IconTypes } from 'solid-icons'
import { FaSolidCopy } from 'solid-icons/fa'
import { copyToClipboard } from '../../helpers/copyToClipboard'

export interface InfoFieldProps {
  icon: IconTypes
  value: string
}

export const InfoField = (props: InfoFieldProps) => {
  const { icon: Icon, value } = props

  const handleCopy = () => {
    copyToClipboard(value)
  }

  return (
    <div
      class="flex flex-row items-center w-full mb-2 text-outline hover:text-primary my-2 cursor-pointer"
      onClick={handleCopy}
    >
      <Icon size={20} />
      <span class="flex-grow ml-2 mr-auto">{value}</span>
      <FaSolidCopy size={16} />
    </div>
  )
}
