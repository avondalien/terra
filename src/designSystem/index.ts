import { createTheme } from '@mui/material/styles'
import "../index.css"
import "../assets/fonts/charter/charter_regular-webfont.woff"
import "../assets/fonts/terra/TerraFontNewVer-Regular.ttf"
import type React from 'react';

declare module '@mui/material/styles' {
    interface TypographyVariants {
        minutes: React.CSSProperties;
        destination: React.CSSProperties;
    }

    interface TypographyVariantsOptions {
        minutes?: React.CSSProperties
        destination?: React.CSSProperties
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        minutes: true
        destination: true
    }
}


// const CHARTER = 'charter'
const TERRA = 'terra'
const CHARTER = 'helvetica'
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
                'sans-serif'
            ].join(','),
        h1: {
            fontFamily: TERRA,
            fontSize: '10pc',
            fontWeight: 'bold',
            color: '#A66424'
        },
        h2: {
            fontSize: '3.2pc',
            fontWeight: 'bold',
            color: WHITE
        },
        minutes: {
            color: WHITE,
            fontFamily: CHARTER,
            fontSize: '4pc'
        },
        destination: {
            color: WHITE,
            fontFamily: CHARTER,
            fontSize: '2.5pc'
        },
        body1: {
            color: WHITE,
            fontSize: '4pc'
        },
        body2: {
            color: WHITE,
            fontSize: '2.5pc'
        }
    },
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: '2.5pc'
                }
            },
        }
    },
})

export { terraTheme }

                
                        