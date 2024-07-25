import { FaBrandsGithubAlt, FaBrandsLinkedinIn } from 'solid-icons/fa'
import { InfoField } from '../fragments/InfoField'
import { InfoLink } from '../fragments/InfoLink'
import { Section } from '../fragments/Section'
import { SectionHeader } from '../fragments/SectionHeader'
import { SectionSubHeader } from '../fragments/SectionSubHeader'

export const Info = () => {
  return (
    <Section>
      <SectionHeader title="Info" />

      <SectionSubHeader title="Mail" />
      <InfoField value="matteozanoncello.dev@gmail.com" showCopy />
      <SectionSubHeader title="City" />
      <InfoField value="Verona - Italy" />

      <hr class="w-full mt-4" />

      <InfoLink icon={FaBrandsLinkedinIn} value="matteo-zanoncello" link="https://linkedin.com/in/matteo-zanoncello" />
      <InfoLink icon={FaBrandsGithubAlt} value="zanomate" link="https://github.com/zanomate" />
    </Section>
  )
}
