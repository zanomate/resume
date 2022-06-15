import { Show } from 'solid-js'

export const TimelineItem = (props) => {
  const fullNode = <div class="absolute top-1 h-5 w-5 rounded-full bg-violet-500 z-10" />
  const emptyNode = <div class="absolute top-1 h-5 w-5 rounded-full border-4 border-violet-500 bg-white z-10" />

  return (
    <li class="relative">
      <div class="ml-8">
        {props.children}
      </div>
      <Show when={props.selected} fallback={emptyNode}>
        {fullNode}
      </Show>
      <Show when={props.connected}>
        <div class="absolute top-4 left-2 h-full w-1 bg-violet-500" />
      </Show>
    </li>
  )
}
