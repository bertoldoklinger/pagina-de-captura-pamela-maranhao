import './App.css'
import { About } from './components/About'
import Contact from './components/Contact'
import { Hero } from './components/Hero'
import { Learning } from './components/Learning'

function App() {
 
  return (
    <>
    <main>
      <Hero/>
      <Learning/>
      <About/>
      <Contact  />
    </main>
    </>
  )
}

export default App
