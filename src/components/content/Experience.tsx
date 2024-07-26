import { Accordion } from '../fragments/Accordion'
import { Job } from '../fragments/Job'
import { Section } from '../fragments/Section'
import { SectionHeader } from '../fragments/SectionHeader'
import { TimelineItem } from '../fragments/TimelineItem'

export const Experience = () => {
  return (
    <Section>
      <SectionHeader title="Experience" />
      <ul>
        <TimelineItem connected selected>
          <Job
            jobTitle="Senior Front-End Software Engineer"
            companyName="Milkman Technologies"
            companyLink="https://www.milkmantechnologies.com"
            start="2021-05"
          >
            I played a pivotal role in the creation and evolution of all front-end components within the company.
            My responsibilities encompassed both the implementation and the definition of technical solutions.
            This involved not only coding and deploying various user interfaces but also strategizing and designing the technical frameworks and methodologies that underpin our front-end architecture.
            My contributions ensured that our user-facing products were both functional and innovative, aligning with the company's overall vision and technological goals.
            <Accordion title="Key Achievements">
              As part of a rapidly growing startup, I witnessed firsthand the challenges and triumphs of scaling a business.
              This experience allowed me to deeply understand the intricacies of developing scalable solutions under pressure.
              <br /><br />
              I successfully built and evolved the most complex component of the application, which integrated both geographic and temporal data.
              This component presented significant performance challenges due to the large volume of data that needed to be efficiently visualized and managed.
              My work not only addressed the technical hurdles but also significantly enhanced the application's overall functionality and user experience.
            </Accordion>
          </Job>
        </TimelineItem>
        <TimelineItem connected>
          <Job
            jobTitle="Front-End Software Engineer"
            companyName="Milkman Technologies"
            companyLink="https://www.milkmantechnologies.com"
            start="2019-05"
            end="2021-05"
          >
            I contributed significantly to the development and evolution of all front-end components within the company, encompassing both web and mobile platforms.
            <Accordion title="Key Achievements">
              I have experienced significant growth in my soft skills, which have become integral to my professional development.
              My communication abilities have sharpened, allowing me to articulate complex ideas clearly and effectively to diverse audiences.
            </Accordion>
          </Job>
        </TimelineItem>
        <TimelineItem>
          <Job
            jobTitle="Full-Stack Developer"
            companyName="Aktive Reply"
            companyLink="https://www.reply.com/aktive-reply"
            start="2016-11"
            end="2019-05"
          >
            As a Web Development Consultant, I have experience working with widely-used Java frameworks.
            In the last year, I have specialized in developing CMS portals using the Adobe Experience Manager (AEM) platform.
          </Job>
        </TimelineItem>
        <TimelineItem>
          <Job
            jobTitle="Java Developer (University Intern)"
            companyName="JuliaSoft"
            start="2013-11"
            end="2014-03"
          >
             I developed a tool for "Amalia", a library for decompiling Android bytecode.
          </Job>
        </TimelineItem>
      </ul>
    </Section>
  )
}
