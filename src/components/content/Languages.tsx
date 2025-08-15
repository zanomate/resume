import { Dots } from '../fragments/Dots'
import { Section } from '../fragments/Section'
import { SectionHeader } from '../fragments/SectionHeader'

export const Languages = () => {
  return (
    <Section>
      <SectionHeader title="Languages" />
      <Dots label="Italian" total={8} active={8} />
      <Dots label="English" total={8} active={6} />
    </Section>
  )
}
