import { ProgressBar } from '../fragments/ProgressBar'
import { Section } from '../fragments/Section'
import { SectionHeader } from '../fragments/SectionHeader'

export const Languages = () => {
  return (
    <Section>
      <SectionHeader title="Languages" />
      <ProgressBar label="Italian" progress="100" />
      <ProgressBar label="English" progress="70" />
    </Section>
  )
}
