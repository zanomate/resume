import { About } from './content/About'
import { Education } from './content/Education'
import { Experience } from './content/Experience'
import { Footer } from './content/Footer'
import { Header } from './content/Header'
import { Info } from './content/Info'
import { Languages } from './content/Languages'
import { ProfilePicture } from './content/ProfilePicture'
import { Projects } from './content/Projects'
import { SoftSkills } from './content/SoftSkills'
import { TechSkills } from './content/TechSkills'

export const App = () => {
  return (
    <div class="min-h-screen flex flex-col justify-between items-stretch">
      <div class="grow container lg:max-w-screen-lg mx-auto px-4 flex flex-col">
        <Header />

        <div class="grow grid grid-cols-12 gap-2">
          <div class="flex flex-col items-stretch col-span-12 md:col-span-6 lg:col-span-4">
            <ProfilePicture />
            <Info />
            <TechSkills />
            <SoftSkills />
            <Languages />
          </div>
          <div class="col-span-12 md:col-span-6 lg:col-span-8 md:pl-4 lg:pl-8 pt-4">
            <About />
            <Experience />
            <Education />
            <Projects />
          </div>
        </div>
      </div>
      <Footer />
      <div
        id="copied-snackbar"
        class="fixed left-1/2 -translate-x-1/2 bottom-2 opacity-0 bg-primary text-white p-3 transition-all rounded-lg"
      >
        copied
      </div>
    </div>
  )
}
