import { About } from './About'
import { Education } from './Education'
import { Experience } from './Experience'
import { Footer } from './Footer'
import { Header } from './Header'
import { Info } from './Info'

export const App = () => {
  return (
    <div class="min-h-screen flex flex-col justify-between items-stretch">
      <div class="grow container lg:max-w-screen-lg mx-auto px-4 flex flex-col">
        <Header />

        <div class="grow grid grid-cols-1 lg:grid-cols-3">
          <div class="col-span-3 lg:col-span-1 border-b-4 lg:border-b-0 lg:border-r-4 lg:pr-8">
            <Info />
          </div>
          <div class="col-span-3 lg:col-span-2 lg:pl-8">
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
