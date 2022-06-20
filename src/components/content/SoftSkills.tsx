import { Chip } from '../fragments/Chip'
import { Section } from '../fragments/Section'
import { SectionHeader } from '../fragments/SectionHeader'

export const SoftSkills = () => {
  return (
    <Section>
      <SectionHeader title="Soft" />
      <div class="flex flex-row flex-wrap gap-2">
        <Chip label="Teamwork" />
        <Chip label="Communication" />
        <Chip label="Learn" />
        <Chip label="Problem-solving" />
        <Chip label="Creativity" />
      </div>
    </Section>
  )
}
