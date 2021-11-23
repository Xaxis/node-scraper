import React from 'react'
import ReactDOM from 'react-dom'
import Layout from './components/Layout/Layout'
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core'
import './index.scss'

const App = function () {
    const palette = {
        primary: {
            main: '#7b1fa2',
            light: '#A835D8',
            lightAlt: '#C475E4',
            dark: '#4A1362',
            darkAlt: '#2A0B37'
        },
        secondary: {
            main: '#242424',
            light: '#4A4A4A',
            dark: '#151515',
            darkAlt: '#101010'
        },
        tertiary: {
            main: '#00695f',
            light: '#33877f',
            dark: '#004942'
        },
        quaternary: {
            main: '#007bb2',
            light: '#3395c1',
            dark: '#00567c'
        },
        quinary: {
            main: '#f44336',
            light: '#f6685e',
            dark: '#aa2e25'
        },
        error: {},
        warning: {},
        info: {},
        success: {},
        text: {
            primary: '#ffffff',
            secondary: 'rgba(255,255,255,0.7)',
            disabled: 'rgba(255,255,255,0.3)'
        },
        action: {
            active: '#ffffff',
            hover: 'rgba(255,255,255,0.08)',
            selected: 'rgba(255,255,255,0.16)',
            disabled: 'rgba(255,255,255,0.3)',
            disabledBackground: 'rgba(36,36,36,0.12)'
        },
        background: {
            default: '#101010',
            paper: '#242424'
        },
        divider: '#242424',
        status: {
            registered: {
                alt: '#A835D8',
                main: '#4A1362'
            },
            running: {
                alt: '#33877f',
                main: '#004942'
            },
            finished: {
                alt: '#007bb2',
                main: '#00567c'
            },
            paused: {
                main: '#242424'
            }
        }
    }

    /**
     * Root MUI component overrides.
     */
    const theme = createMuiTheme({
        typography: {
            fontSize: 12
        },
        palette: {
            type: "dark",
            primary: {
                main: palette.primary.main,
                light: palette.primary.light,
                lightAlt: palette.primary.lightAlt,
                dark: palette.primary.dark,
                darkAlt: palette.primary.darkAlt
            },
            secondary: {
                main: palette.secondary.main,
                light: palette.secondary.light,
                dark: palette.secondary.dark,
                darkAlt: palette.secondary.darkAlt
            },
            tertiary: {
                main: palette.tertiary.main,
                light: palette.tertiary.light,
                dark: palette.tertiary.dark,
            },
            quaternary: {
                main: palette.quaternary.main,
                light: palette.quaternary.light,
                dark: palette.quaternary.dark,
            },
            quinary: {
                main: palette.quinary.main,
                light: palette.quinary.light,
                dark: palette.quinary.dark,
            },
            // error: {},
            // warning: {},
            // info: {},
            // success: {},
            text: {
                primary: palette.text.primary,
                secondary: palette.text.secondary,
                disabled: palette.text.disabled,
            },
            action: {
                active: '#ffffff',
                hover: palette.action.hover,
                selected: palette.action.selected,
                disabled: palette.action.disabled,
                disabledBackground: palette.action.disabledBackground
            },
            background: {
                default: palette.background.default,
                paper: palette.background.paper
            },
            divider: palette.divider,
            status: {
                registered: {
                    main: palette.status.registered.main,
                    alt: palette.status.registered.alt
                },
                running: {
                    main: palette.status.running.main,
                    alt: palette.status.running.alt
                },
                finished: {
                    main: palette.status.finished.main,
                    alt: palette.status.finished.alt
                },
                paused: {
                    main: palette.status.paused.main
                }
            }
            // contrastThreshold: 0.5,
            // tonalOffset: 0.7
        },
        props: {
            MuiTextField: {
                margin: 'dense'
            },
            MuiInputBase: {
                margin: 'dense'
            },
            MuiButton: {
                size: 'small'
            },
            MuiChip: {
                size: 'small'
            }
        },
        overrides: {}
    })

    return (
        <>
            <MuiThemeProvider theme={theme}>
                <Layout/>
            </MuiThemeProvider>
        </>
    )
}

const view = App('nodescraper')
const element = document.getElementById('app')
ReactDOM.render(view, element)