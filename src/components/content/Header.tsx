export const Header = () => {
  return (
    <div class="flex flex-row border-b-4 items-center">
      <div class="mr-4">
        <img src="assets/logo.svg" class="rounded-full bg-violet-200 w-24 rotate-45" />
      </div>
      <div class="flex flex-col flex-grow pt-12 pb-8">
        <span class="text-4xl sm:text-5xl tracking-wide font-bold uppercase">Matteo Zanoncello</span>
        <span class="tracking-wide text-lg mt-2">Senior Front-End Software Engineer</span>
      </div>
    </div>
  )
}
