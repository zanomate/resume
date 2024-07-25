import { Section } from '../fragments/Section'
import { SectionHeader } from '../fragments/SectionHeader'

export const About = () => {
  return (
    <Section>
      <SectionHeader title="About" />
      <p class="text-justify">
        With over 8 years of experience working for various companies, I am a seasoned Senior Front-End Software Engineer specializing in developing dynamic and responsive web applications using React for the past 5+ years.
        My strong inclination towards UI/UX and design allows me to create visually appealing and user-friendly interfaces.
        <br />
        I excel in collaborative team environments, leveraging strong leadership, communication, and problem-solving skills to drive project success.
        Also, I encourage knowledge sharing, frequently mentoring colleagues and contributing to team learning.
        <br />
        Recently, I have developed interest in exploring back-end technologies and am eager to expand my expertise in this area.
        I am particularly motivated to delve into innovative back-end solutions to create seamless and efficient full-stack applications.
        <br />
        My adaptability and commitment to staying at the forefront of web development trends make me a versatile and valuable asset to any development team.
      </p>
    </Section>
  )
}
