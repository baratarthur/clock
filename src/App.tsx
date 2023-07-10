
import './App.css'
import { Clock } from './components/clock'

function App() {
  return (
    <main>
      <header></header>
      <article>
        <Clock />
      </article>
      <footer>
        made by
        <a href="https://github.com/baratarthur"
          target='_blank'
          referrerPolicy="no-referrer">
          @baratarthur
        </a>
      </footer>
    </main>
  )
}

export default App
