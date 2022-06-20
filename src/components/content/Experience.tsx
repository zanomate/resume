import { Section } from '../fragments/Section'
import { SectionHeader } from '../fragments/SectionHeader'
import { TimelineItem } from '../fragments/TimelineItem'
import { Job } from '../fragments/Job'

export const Experience = () => {
  return (
    <Section>
      <SectionHeader title="Experience" />
      <ul>
        <TimelineItem connected selected>
          <Job
            jobTitle="Senior Front End Developer"
            companyName="Milkman Technologies"
            companyLink="https://www.milkmantechnologies.com"
            start="2021-05"
          >
            Development of the main company product.
            Involved in technical and design decisions, coordinating with design and product teams.
          </Job>
        </TimelineItem>
        <TimelineItem connected>
          <Job
            jobTitle="Front End Developer"
            companyName="Milkman Technologies"
            companyLink="https://www.milkmantechnologies.com"
            start="2019-05"
            end="2021-05"
          >
            Development of both web and mobile internal products using React, React Native, and all the related ecosystem.
          </Job>
        </TimelineItem>
        <TimelineItem>
          <Job
            jobTitle="Full-stack Developer"
            companyName="Aktive Reply"
            companyLink="https://www.reply.com/aktive-reply"
            start="2016-11"
            end="2019-05"
          >
            Web Development consultant for projects mainly based on Java technologies.
            Specialized in CMS portals created through the Adobe Experience Manager (AEM) platform.
            Worked for many corporate companies (Nexi, Unicredit, FCA and others).
          </Job>
        </TimelineItem>
        <TimelineItem>
          <Job
            jobTitle="Java Developer (University Intern)"
            companyName="JuliaSoft"
            companyLink="https://www.juliasoft.com"
            start="2013-11"
            end="2014-03"
          >
            Development of a tool for "Amalia", a library for decompiling Android bytecode.
          </Job>
        </TimelineItem>
      </ul>
    </Section>
  )
}
