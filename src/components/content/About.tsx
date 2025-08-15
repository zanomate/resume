import { Section } from '../fragments/Section'
import { SectionHeader } from '../fragments/SectionHeader'

export const About = () => {
  return (
    <Section>
      <SectionHeader title="About" />
      <p class="text-sm text-justify">
        With over 8 years of experience working for various companies, I am a seasoned Senior Front-End Software
        Engineer specializing in developing web applications using React for the past 5+ years.
        <br />
        I excel in collaborative team environments, leveraging strong leadership, communication, and problem-solving
        skills to drive project success. Also, I encourage knowledge sharing, frequently mentoring colleagues and
        contributing to team learning.
        <br />I am deeply passionate about UI/UX design, which naturally draws me towards the design field. However, I
        have recently developed interest in exploring back-end technologies and am eager to expand my expertise in this
        area.
      </p>
    </Section>
  )
}
