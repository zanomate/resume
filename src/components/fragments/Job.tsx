import moment from 'moment'
import { createMemo } from 'solid-js'

export const Job = (props) => {

  console.log(moment(props.end, 'YYYY-MM'))

  const endYear = createMemo(() => {
    if (props.end)
      return moment(props.end, 'YYYY-MM').format('YYYY')
    return 'Present'
  })

  const duration = createMemo(() => {
    const end = props.end ? moment(props.end, 'YYYY-MM') : moment()
    const diff = moment.duration(end.diff(moment(props.start)))
    const y = diff.years()
    const M = diff.months()
    let format = ''
    if (y) format += `${y} ${y === 1 ? 'year' : 'years'}`
    if (y && M) format += ' '
    if (M) format += `${M} ${M === 1 ? 'month' : 'months'}`
    return format
  })

  return (
    <div class="flex flex-row w-full my-2 pb-4">
      <div class="flex flex-col flex-grow items-stretch">
        <span class="font-semibold">{props.jobTitle}</span>
        <span class="text-sm">
          <a href={props.companyLink} target="_blank" class="underline font-semibold text-violet-500">
            {props.companyName}
          </a>
          {' '}
          ({duration})
        </span>
        <span class="text-sm">
          {props.children}
        </span>
      </div>
      <span class="text-sm mt-0.5">{endYear}</span>
    </div>
  )
}
