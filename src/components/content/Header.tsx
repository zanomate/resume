export const Header = () => {
  return (
    <div class="flex flex-row border-b-4 items-center">
      <img src="assets/logo.svg" class="rounded-full bg-violet-200 w-20 mr-4 rotate-45" />
      <div class="flex flex-col flex-grow pt-12 pb-8">
        <span class="text-4xl sm:text-5xl tracking-wide font-bold uppercase">Matteo<br />Zanoncello</span>
        <span class="tracking-wide font-light mt-2">Front End Developer</span>
      </div>
    </div>
  )
}
