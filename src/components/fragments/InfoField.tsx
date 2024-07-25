import { FaRegularCopy } from 'solid-icons/fa'
import { Show } from 'solid-js'
import { copyToClipboard } from '../../helpers/copyToClipboard'

export const InfoField = (props) => {
  const handleCopy = () => {
    copyToClipboard(props.value)
  }

  return (
    <div class="flex flex-row justify-center w-full mb-2">
      <span class="flex-grow">{props.value}</span>
      <Show when={props.showCopy}>
        <button onClick={handleCopy} class="float-right text-gray-400 hover:text-violet-700">
          <FaRegularCopy size={16} />
        </button>
      </Show>
    </div>
  )
}
