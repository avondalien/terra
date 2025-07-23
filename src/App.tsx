import { ThemeProvider } from '@mui/material/styles'
import { terraTheme } from './designSystem'
import { Tracker } from './pages/tracker'
import "./index.css"
import { useTransitData } from './data/useTransitData'

function App() {

  const {transitData: routes} = useTransitData()

  return (
    <>
      <ThemeProvider theme={terraTheme}>
        <Tracker routes={routes}/>
      </ThemeProvider>
    </>
  )
}

export default App
