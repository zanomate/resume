export const Header = () => {
  return (
    <div class="flex flex-row border-b-4 border-dotted border-tertiary items-center">
      <div class="mr-4">
        <svg class="rounded-xl w-24 bg-tertiary fill-on-tertiary" viewBox="0 0 300 300">
          <path d="M120,260h-20v-20h20v20Z" stroke-width="0.6" />
          <path d="M120,260h-20v-20h20v20Z" transform="translate(0-40)" stroke-width="0.6" />
          <path
            d="M155.895606,66.56257h60v80h40v20h-60v-80h-40v-20Z"
            transform="translate(-55.895606 93.43743)"
            stroke-width="0.6"
          />
          <path
            d="M36.178898,191.724291v-100h20v0h80v180h-20v-160h-20v80h-20v-80h-20v80h-20Z"
            transform="translate(63.821102-51.724291)"
            stroke-width="0.6"
          />
        </svg>
      </div>
      <div class="flex flex-col flex-grow pt-8 pb-8">
        <span class="text-4xl sm:text-5xl tracking-wide font-bold uppercase text-primary">Matteo Zanoncello</span>
        <span class="tracking-wide text-lg mt-2 text-secondary">Senior Front-End Software Engineer | UX Designer</span>
      </div>
    </div>
  )
}
