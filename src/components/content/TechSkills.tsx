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
        <Chip label="Node" partialSelected />
        <Chip label="Next" partialSelected />
        <Chip label="Tailwind" partialSelected />
        <Chip label="Solid JS" partialSelected />
        <Chip label="Svelte" />
        <Chip label="Vue" />
        <Chip label="Vite" partialSelected />
        <Chip label="CRA" partialSelected />
        <Chip label="Webpack" />
        <Chip label="Rollup" />
        <Chip label="Rest API" partialSelected />
        <Chip label="AWS" />
        <Chip label="Docker" />
        <Chip label="Kubernetes " />
        <Chip label="SQL" partialSelected />
        <Chip label="Java" partialSelected />
      </div>
    </Section>
  )
}
