import { Section } from '../fragments/Section'
import { SectionHeader } from '../fragments/SectionHeader'

export const About = () => {
  return (
    <Section>
      <SectionHeader title="About" />
      <p class="text-justify">
        I'm a creative and enthusiastic team player with 5+ years projecting and building web applications for many companies.
        I focused myself on React and its ecosystem in the last 3 years, but I'm always open to change and innovation.
        I'm also very passionate about UI/UX design, and likes to share my skills and knowledge with my team.
      </p>
    </Section>
  )
}
