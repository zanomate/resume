export interface DotsProps {
  label: string
  total: number
  active: number
}

export const Dots = (props: DotsProps) => {
  return (
    <div class="flex flex-col w-full mb-2">
      <span class="font-semibold text-sm mb-1 text-tertiary">{props.label}</span>
      <div class="flex items-center gap-2">
        {Array.from({ length: props.total }).map((_, index) => (
          <span
            class={`inline-block size-6 rounded-full ${index < props.active ? 'bg-primary' : 'bg-primary-container'}`}
          ></span>
        ))}
      </div>
    </div>
  )
}
