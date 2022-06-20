import { About } from './content/About'
import { Languages } from './content/Languages'
import { ProfilePicture } from './content/ProfilePicture'
import { SoftSkills } from './content/SoftSkills'
import { TechSkills } from './content/TechSkills'
import { Education } from './content/Education'
import { Experience } from './content/Experience'
import { Footer } from './content/Footer'
import { Header } from './content/Header'
import { Info } from './content/Info'

export const App = () => {
  return (
    <div class="min-h-screen flex flex-col justify-between items-stretch">
      <div class="grow container lg:max-w-screen-lg mx-auto px-4 flex flex-col">
        <Header />

        <div class="grow grid grid-cols-1 lg:grid-cols-3">
          <div class="flex flex-col items-stretch col-span-3 lg:col-span-1 border-b-4 lg:border-b-0 lg:border-r-4 lg:pr-8 flex flex-col items-start py-8">
            <ProfilePicture />
            <Info />
            <TechSkills />
            <SoftSkills />
            <Languages />
          </div>
          <div class="col-span-3 lg:col-span-2 lg:pl-8 pt-4">
            <About />
            <Experience />
            <Education />
          </div>
        </div>
      </div>
      <Footer />
      <div id="copied-snackbar" class="fixed left-1/2 -translate-x-1/2 bottom-2 opacity-0 bg-violet-700 text-white p-3 transition-all rounded-lg">copied</div>
    </div>
  )
}
