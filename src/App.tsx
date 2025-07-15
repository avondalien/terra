import { ThemeProvider } from '@mui/material/styles'
import { terraTheme } from './designSystem'
import { Tracker } from './pages/tracker'
import "./index.css"
import Typography from '@mui/material/Typography'

function App() {

  return (
    <>
      <ThemeProvider theme={terraTheme}>
        <Tracker routes={[]}/>
      </ThemeProvider>
      <Typography variant="body1">Hello World</Typography>
      
    </>
  )
}

export default App
