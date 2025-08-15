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
        <Chip label="Tailwind" selected />
        <Chip label="Storybook" selected />
        <Chip label="Micro-FE" partialSelected />
        <Chip label="Jest" partialSelected />
        <Chip label="Playwright" partialSelected />
        <Chip label="Cypress" partialSelected />
        <Chip label="MUI" selected />
        <Chip label="JavaScript" selected />
        <Chip label="HTML" partialSelected />
        <Chip label="CSS" partialSelected />
        <Chip label="Node" partialSelected />
        <Chip label="Bun" partialSelected />
        <Chip label="Sass" partialSelected />
        <Chip label="Next" partialSelected />
        <Chip label="Vite" selected />
        <Chip label="CRA" partialSelected />
        <Chip label="Rollup" partialSelected />
        <Chip label="Webpack" />
        <Chip label="Solid JS" partialSelected />
        <Chip label="Svelte" />
        <Chip label="Vue" />
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
