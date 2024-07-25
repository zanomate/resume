import { Chip } from '../fragments/Chip'
import { Section } from '../fragments/Section'
import { SectionHeader } from '../fragments/SectionHeader'

export const TechSkills = () => {
  return (
    <Section>
      <SectionHeader title="Tech" />
      <div class="flex flex-row flex-wrap gap-2">
        <Chip label="React" selected />
        <Chip label="TypeScript" selected />
        <Chip label="Jest" selected />
        <Chip label="HTML5" partialSelected />
        <Chip label="CSS3" partialSelected />
        <Chip label="Sass" partialSelected />
        <Chip label="JavaScript" selected />
        <Chip label="Responsive Design" partialSelected />
        <Chip label="Node" partialSelected />
        <Chip label="Tailwind" partialSelected />
        <Chip label="Solid JS" partialSelected />
        <Chip label="Vite" partialSelected />
        <Chip label="Webpack" />
        <Chip label="Rollup" />
        <Chip label="Rest API" partialSelected />
        <Chip label="Svelte" />
        <Chip label="Vue" />
        <Chip label="SQL" />
        <Chip label="Java" partialSelected />
      </div>
    </Section>
  )
}
