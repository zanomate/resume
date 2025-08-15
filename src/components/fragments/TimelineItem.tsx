import { JSX, Show } from 'solid-js'

export interface TimelineItemProps {
  selected?: boolean
  connected?: 'full' | 'half'
  children?: JSX.Element
}

export const TimelineItem = (props: TimelineItemProps) => {
  const { selected, connected, children } = props

  const fullNode = <div class="absolute top-1 h-5 w-5 rounded-full bg-tertiary z-10" />
  const emptyNode = <div class="absolute top-1 h-5 w-5 rounded-full border-4 border-tertiary bg-background z-10" />

  return (
    <li class="relative">
      <div class="ml-8">{children}</div>
      <Show when={selected} fallback={emptyNode}>
        {fullNode}
      </Show>
      <Show when={connected === 'full'}>
        <div class="absolute top-4 left-2 h-full w-1 bg-tertiary" />
      </Show>
      <Show when={connected === 'half'}>
        <div class="absolute top-4 left-2 h-full w-1 bg-[linear-gradient(0deg,_var(--color-tertiary)_25%,_var(--color-background)_25%,_var(--color-background)_50%,_var(--color-tertiary)_50%,_var(--color-tertiary)_75%,_var(--color-background)_75%,_var(--color-background)_100%)] bg-[length:40px_40px]" />
      </Show>
    </li>
  )
}
