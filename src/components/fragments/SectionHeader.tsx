export const SectionHeader = (props) => {
  return (
    <div class="flex flex-col items-start">
      <span class="text-2xl uppercase font-bold">{props.title}</span>
      <div class="w-6 h-1 bg-violet-500 mb-4" />
    </div>
  )
}
