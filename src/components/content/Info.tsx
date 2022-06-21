import { FaBrandsGithubAlt, FaBrandsLinkedinIn } from 'solid-icons/fa'
import { InfoField } from '../fragments/InfoField'
import { Section } from '../fragments/Section'
import { SectionHeader } from '../fragments/SectionHeader'
import { SectionSubHeader } from '../fragments/SectionSubHeader'

export const Info = () => {
  return (
    <Section>
      <SectionHeader title="Info" />

      <SectionSubHeader title="Mail" />
      <InfoField value="matteozanoncello.dev@gmail.com" showCopy />
      <SectionSubHeader title="Phone" />
      <InfoField value="+39 349 89 24 564" showCopy />
      <SectionSubHeader title="City" />
      <InfoField value="Verona - Italy" />

      <hr class="w-full mt-4" />
      <div class="flex flex-row items-center -ml-3">
        <a target="_blank" href="https://linkedin.com/in/matteo-zanoncello" class="p-3 text-gray-400 hover:text-violet-700">
          <FaBrandsLinkedinIn size={24} />
        </a>
        <a target="_blank" href="https://github.com/zanomate" class="p-1 text-gray-400 hover:text-violet-700">
          <FaBrandsGithubAlt size={24} />
        </a>
      </div>

    </Section>
  )
}
