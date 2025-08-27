import { createTheme } from '@mui/material/styles'
import "../index.css"
import "../assets/fonts/charter/charter_regular-webfont.woff"
import "../assets/fonts/terra/TerraFontNewVer-Regular.ttf"

const CHARTER = 'charter'
const TERRA = 'terra'

const TEXT_COLOR = "#2f2722"
const WHITE = "#e8e8e8"

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
            fontSize: '10pc',
            fontWeight: 'bold',
            color: TEXT_COLOR
        },
        h2: {
            fontSize: '2.7pc',
            fontWeight: 'bold',
            color: TEXT_COLOR
        },
        body1: {
            color: WHITE,
            fontSize: '2.7pc'
        },
        body2: {
            color: TEXT_COLOR,
            fontSize: '2pc'
        }
    },
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    background: '#904029',
                    borderRadius: '2.5pc'
                }
            },
        }
    },
})

export { terraTheme }

                
                        