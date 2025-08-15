import moment from 'moment'
import { createMemo } from 'solid-js'
import type { JSX } from 'solid-js'

export interface JobProps {
  start: string
  end?: string
  title: string
  companyName: string
  companyLink?: string
  children?: JSX.Element
}

export const Job = (props: JobProps) => {
  const { start, end, title, companyName, companyLink, children } = props

  const endYear = createMemo(() => {
    if (end) return moment(end, 'YYYY-MM').format('YYYY')
    return 'Present'
  })

  const duration = createMemo(() => {
    const endMoment = end ? moment(end, 'YYYY-MM') : moment()
    const startMoment = moment(start, 'YYYY-MM')
    const diff = moment.duration(endMoment.diff(startMoment))
    const d = diff.days()
    const M = diff.months() + (d > 15 ? 1 : 0)
    const y = diff.years()
    let format = ''
    if (y) format += `${y} ${y === 1 ? 'year' : 'years'}`
    if (y && M) format += ' '
    if (M) format += `${M} ${M === 1 ? 'month' : 'months'}`
    return format
  })

  return (
    <div class="flex flex-row w-full my-2 pb-4">
      <div class="flex flex-col flex-grow items-stretch">
        <span class="text-md">
          <span class="font-semibold text-secondary">{title}</span> {duration() ? `(${duration()})` : ''}
        </span>
        {companyLink ? (
          <a href={companyLink} target="_blank" class="text-sm underline font-semibold text-tertiary">
            {companyName}
          </a>
        ) : (
          <span class="text-sm underline font-semibold">{companyName}</span>
        )}
        <span class="text-sm">{children}</span>
      </div>
      <span class="text-sm mt-0.5 text-nowrap">{endYear()}</span>
    </div>
  )
}
