import { ThemeProvider } from '@mui/material/styles'
import { terraTheme } from './designSystem'
import { Tracker } from './pages/tracker'
import "./index.css"
import { useTransitData } from './data/useTransitData'
import { TimeProvider } from './time'

function App() {

  const {transitData: routes} = useTransitData()

  return (
    <>
      <ThemeProvider theme={terraTheme}>
        <TimeProvider>
          <Tracker routes={routes}/>
        </TimeProvider>
      </ThemeProvider>
    </>
  )
}

export default App
