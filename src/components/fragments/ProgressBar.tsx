export const ProgressBar = (props) => {
  return (
    <div class="flex flex-col w-full">
      <span class="font-semibold text-sm mb-1">{props.label}</span>
      <div class="w-full bg-gray-200 h-1">
        <div class="bg-violet-500 h-1" style={`width: ${props.progress}%`}></div>
      </div>
    </div>
  )
}
