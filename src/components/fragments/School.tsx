export const School = (props) => {
  return (
    <div class="flex flex-row w-full my-2 pb-4">
    <div class="flex flex-col flex-grow items-stretch">
      <span class="font-semibold">{props.type}</span>
      <span class="text-lg tracking-wide">
        {props.name}
      </span>
      <span class="text-sm">
        <a href={props.schoolLink} target="_blank" class="underline font-semibold text-violet-500">{props.schoolName}</a>
      </span>
      <span class="text-sm">
        {props.children}
      </span>
    </div>
      <span class="text-sm mt-0.5">{props.completion}</span>
    </div>
  )
}
