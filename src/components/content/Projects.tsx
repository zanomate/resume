import { Section } from '../fragments/Section'
import { SectionHeader } from '../fragments/SectionHeader'

const Project = (props) => (
  <div
    class="border border-outline-variant p-2 rounded-md hover:bg-secondary/8 transition-colors cursor-pointer"
    onClick={() => {
      window.open(props.link, '_blank')
    }}
  >
    <h4 class="text-md text-tertiary hover:underline mb-1">{props.name}</h4>
    <p class="text-sm">{props.description}</p>
  </div>
)

export const Projects = () => {
  return (
    <Section>
      <SectionHeader title="Projects" />
      <div class="grid grid-cols-2 gap-4">
        <Project
          name="Kalos"
          description="A web development tool to find and transform colors"
          link="http://kalos-tool.netlify.app"
        />
        <Project
          name="Advent of Code"
          description="My collection of solutions to the Advent of Code challenges"
          link="https://github.com/zanomate/advent-of-code"
        />
      </div>
    </Section>
  )
}
