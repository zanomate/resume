import { School } from './fragments/School'
import { SectionHeader } from './fragments/SectionHeader'
import { TimelineItem } from './fragments/TimelineItem'

export const Education = () => {
  return (
    <div class="flex flex-col items-stretch py-8">
      <SectionHeader title="Education" />
      <ul>
        <TimelineItem connected>
          <School
            type="Master degree (Summa cum laude)"
            name={<>
              <span class="whitespace-nowrap">Computer Science and Engineering</span>
              {' '}
              <span class="whitespace-nowrap">(Software Security)</span>
            </>}
            schoolName="Università degli studi di Verona"
            schoolLink="https://www.di.univr.it/"
            completion="2016"
          >
            <b>Skills:</b> Software Security, Network Security, Malware, Cryptography, Advanced Database, Algorithms and Complexity, Logic and Languages, Information Systems
            <br />
            <b>Thesis:</b> "Similarity check with the use of Symbolic Automata"
          </School>
        </TimelineItem>
        <TimelineItem connected>
          <School
            type="Bachelor degree"
            name="Computer Science"
            schoolName="Università degli studi di Verona"
            schoolLink="https://www.di.univr.it/"
            completion="2014"
          >
            <b>Skills:</b> Mathematical Analysis, Logic, Linear Algebra, Physics, Programming, Algorithms, Database, Operating Systems, Computer Architecture, Networks, Languages and Compilers
            <br />
            <b>Internship:</b> "DexStudio", a tool for the use of the "Android Manipulation Library" Amalia
          </School>
        </TimelineItem>
        <TimelineItem>
          <School
            type="High School"
            name="IT Expert"
            schoolName="Scuole 'Alle Stimate'"
            schoolLink="http://www.scuolestimate.it/"
            completion="2011"
          />
        </TimelineItem>
      </ul>
    </div>
  )
}
