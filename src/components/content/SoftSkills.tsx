import { Chip } from '../fragments/Chip'
import { Section } from '../fragments/Section'
import { SectionHeader } from '../fragments/SectionHeader'

export const SoftSkills = () => {
  return (
    <Section>
      <SectionHeader title="Soft" />
      <div class="flex flex-row flex-wrap gap-2">
        <Chip label="Teamwork" selected />
        <Chip label="Communication" selected />
        <Chip label="Learn" selected />
        <Chip label="Problem-solving" selected />
        <Chip label="Creativity" selected />
      </div>
    </Section>
  )
}
