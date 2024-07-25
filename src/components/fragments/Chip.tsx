export interface ChipProps {
  label: string
  partialSelected?: boolean
  selected?: boolean
}

export const Chip = (props: ChipProps) => {
  const { label, partialSelected, selected } = props

  return (
    <div class="inline-block">
      <span
        classList={{
          'peer px-3 py-1.5 select-none rounded-full font-semibold text-sm flex align-center w-max': true,
          'bg-gray-200 text-black': !selected && !partialSelected,
          'bg-violet-500 text-white': selected,
          'bg-violet-300 text-white': partialSelected,
        }}
      >
        {label}
      </span>
    </div>
  )
}
