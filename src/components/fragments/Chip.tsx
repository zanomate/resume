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
          'border border-primary text-primary': !selected && !partialSelected,
          'bg-primary-container text-on-primary-container': partialSelected,
          'bg-primary text-on-primary': selected,
        }}
      >
        {label}
      </span>
    </div>
  )
}
