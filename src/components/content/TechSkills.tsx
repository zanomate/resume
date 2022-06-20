import { Chip, ChipSelectionLevel } from '../fragments/Chip'
import { Section } from '../fragments/Section'
import { SectionHeader } from '../fragments/SectionHeader'

export const TechSkills = () => {
  return (
    <Section>
      <SectionHeader title="Tech" />
      <div class="flex flex-row flex-wrap gap-2">
        <Chip label="React" selected level={ChipSelectionLevel.LV_1} />
        <Chip label="HTML5" selected level={ChipSelectionLevel.LV_2} />
        <Chip label="CSS3" selected level={ChipSelectionLevel.LV_2} />
        <Chip label="Sass" />
        <Chip label="JavaScript" selected level={ChipSelectionLevel.LV_1} />
        <Chip label="Responsive Design" selected level={ChipSelectionLevel.LV_2} />
        <Chip label="Node" />
        <Chip label="Jest" selected level={ChipSelectionLevel.LV_2} />
        <Chip label="Tailwind" />
        <Chip label="Solid JS" />
        <Chip label="Rest API" selected level={ChipSelectionLevel.LV_2} />
        <Chip label="JSON" selected level={ChipSelectionLevel.LV_2} />
        <Chip label="Webpack" />
        <Chip label="Rollup" />
        <Chip label="Svelte" />
        <Chip label="SQL" />
        <Chip label="Java" />
      </div>
    </Section>
  )
}
