import { FaCopy } from 'solid-icons/fa'
import { copyToClipboard } from '../../helpers/copyToClipboard'

export const CopyableField = (props) => {
  const handleCopy = () => {
    copyToClipboard(props.value)
  }

  return (
    <div class="flex flex-row justify-center w-full">
      <span class="flex-grow">{props.value}</span>
      <button onClick={handleCopy} class="float-right text-gray-400 hover:text-violet-700">
        <FaCopy size={16} />
      </button>
    </div>
  )
}
