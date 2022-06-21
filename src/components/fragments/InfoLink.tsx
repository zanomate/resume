export const InfoLink = (props) => {
  return (
    <a
      target="_blank"
      href={props.link}
      class="text-gray-400 hover:text-violet-700 flex flex-row items-center w-full my-2"
    >
      <props.icon size={20} />
      <span class="ml-4">{props.value}</span>
    </a>
  )
}
