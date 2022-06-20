import { createPopper } from '@popperjs/core'
import { createEffect, Show } from 'solid-js'

export enum ChipSelectionLevel {
  LV_1,
  LV_2,
}

export const Chip = (props) => {

  const tooltipId = `${props.id}-tooltip`

  let chip
  let tooltip

  createEffect(() => {
    if (chip && tooltip) {
      createPopper(chip, tooltip, { placement: 'top', modifiers: [{ name: 'offset', options: { offset: [0, 8] }} ] })
    }
  })

  return (
    <div class="inline-block">
      <span
        ref={chip}
        aria-describedby={tooltipId}
        classList={{
          'peer px-3 py-1.5 select-none rounded-full font-semibold text-sm flex align-center w-max': true,
          'cursor-crosshair': props.tooltip,
          'bg-gray-200 text-black': !props.selected,
          'bg-violet-500 text-white': props.selected && props.level === ChipSelectionLevel.LV_1,
          'bg-violet-300 text-white': props.selected && props.level === ChipSelectionLevel.LV_2
        }}
        data-tooltip-target={tooltipId}
      >
        {props.label}
      </span>
      <Show when={props.tooltip}>
        <div ref={tooltip} id={tooltipId} role="tooltip" class="invisible peer-hover:visible bg-violet-200 rounded-sm p-2 text-sm max-w-sm">
          {props.tooltip}
        </div>
      </Show>
    </div>
  )
}
