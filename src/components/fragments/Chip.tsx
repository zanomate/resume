export const Chip = (props) => {
  return (
    <span class={`px-3 py-1.5 rounded-full font-semibold text-sm flex align-center w-max ${props.selected ? 'bg-violet-400' : 'bg-gray-200'} ${props.selected ? 'text-white' : 'text-black'}`}>
      {props.label}
    </span>
  )
}
