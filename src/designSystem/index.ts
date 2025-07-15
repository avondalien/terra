import { createTheme } from '@mui/material/styles'
import "../index.css"
import "../assets/fonts/charter/charter_regular-webfont.woff"
import "../assets/fonts/terra/TerraFontNewVer-Regular.ttf"

const CHARTER = 'charter'
const TERRA = 'terra'

const TEXT_COLOR = "#2f2722"

const terraTheme = createTheme({
    palette: {
        primary: {
            main: '#A66424',
        },
        secondary: {
            main: '#904029',
        }
    },
    typography: {
        fontFamily: [
                CHARTER,
                'roman',
                'serif'
            ].join(','),
        h1: {
            fontFamily: TERRA,
            fontSize: '64pt',
            fontWeight: 'bold',
            color: TEXT_COLOR
        },
        h2: {
            fontSize: '24pt',
            fontWeight: 'bold',
            color: TEXT_COLOR
        },
        body1: {
            color: TEXT_COLOR,
            fontSize: '24pt'
        }
    },
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    background: '#A66424'
                }
            }
        }
    },
})

export { terraTheme }

                
                        