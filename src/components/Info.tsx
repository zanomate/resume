import { FaBrandsGithubAlt, FaBrandsLinkedinIn } from 'solid-icons/fa'
import { Chip } from './fragments/Chip'
import { CopyableField } from './fragments/CopyableField'
import { ProgressBar } from './fragments/ProgressBar'
import { SectionHeader } from './fragments/SectionHeader'
import { SectionSubHeader } from './fragments/SectionSubHeader'

export const Info = () => {
  return (
    <div class="flex flex-col items-start py-8">
      <img alt="profile" src="/assets/profile.png" class="rounded-full max-h-48 mb-2 self-center" />

      <br />

      <SectionHeader title="Info" />
      <SectionSubHeader title="Mail" />
      <CopyableField value="matteozanoncello.dev@gmail.com" />
      <SectionSubHeader title="Phone" />
      <CopyableField value="+39 349 89 24 564" />

      <hr class="w-full mt-4" />
      <div class="flex flex-row items-center -ml-3">
        <a target="_blank" href="https://linkedin.com/in/matteo-zanoncello" class="p-3 text-gray-400 hover:text-violet-700">
          <FaBrandsLinkedinIn size={24} />
        </a>
        <a target="_blank" href="https://https://github.com/zanomate" class="p-1 text-gray-400 hover:text-violet-700">
          <FaBrandsGithubAlt size={24} />
        </a>
      </div>

      <br />

      <SectionHeader title="Tech" />
      <div class="flex flex-row flex-wrap gap-2">
        <Chip label="React" selected />
        <Chip label="Solid JS" />
        <Chip label="HTML5" />
        <Chip label="CSS3" />
        <Chip label="ES6+" />
        <Chip label="..." />
      </div>

      <br />

      <SectionHeader title="Soft" />
      <div class="flex flex-row flex-wrap gap-2">
        <Chip label="Team Work" />
        <Chip label="Autonomy" />
        <Chip label="Leadership" />
        <Chip label="..." />
      </div>

      <br />

      <SectionHeader title="Languages" />
      <ProgressBar label="Italian" progress="100" />
      <ProgressBar label="English" progress="75" />
    </div>
  )
}
