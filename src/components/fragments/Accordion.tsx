import { createSignal, JSX } from 'solid-js'

interface AccordionProps {
  children: JSX.Element
  title: string
  active?: boolean
}

export const Accordion = (props: AccordionProps) => {
  const { children, title } = props

  const [accordionOpen, setAccordionOpen] = createSignal<boolean>(false)

  return (
    <div class="py-2">
      <h2>
        <button
          class="flex items-center w-full text-left font-semibold py-2 cursor-pointer text-secondary"
          onClick={(e) => {
            e.preventDefault()
            setAccordionOpen(!accordionOpen())
          }}
          aria-expanded={accordionOpen()}
        >
          <svg class="fill-tertiary shrink-0 mr-4" width="16" height="16">
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              class={`transform origin-center transition duration-200 ease-out ${accordionOpen() && '!rotate-180'}`}
            />
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              class={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionOpen() && '!rotate-180'}`}
            />
          </svg>
          <span>{title}</span>
        </button>
      </h2>
      <div
        role="region"
        class={`grid text-sm text-secondary overflow-hidden transition-all duration-300 ease-in-out ${accordionOpen() ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div class="overflow-hidden">
          <p class="pb-3">{children}</p>
        </div>
      </div>
    </div>
  )
}
