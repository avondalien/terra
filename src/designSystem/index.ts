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
            fontSize: '3.8pc',
            fontWeight: 'bold',
            lineHeight: 1,
            color: '#A66424'
        },
        h2: {
            fontSize: '1.1pc',
            fontWeight: 'bold',
            color: WHITE
        },
        minutes: {
            color: WHITE,
            fontFamily: CHARTER,
            fontSize: '1.75pc'
        },
        destination: {
            color: WHITE,
            fontFamily: CHARTER,
            fontSize: '1.23pc'
        },
        body1: {
            color: WHITE,
            fontSize: '1.3pc'
        },
        body2: {
            color: WHITE,
            fontSize: '0.8pc'
        }
    },
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: '0.8pc'
                }
            },
        }
    },
})

export { terraTheme }

                
                        