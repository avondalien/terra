import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { RouteTracker } from "../components/routeTracker/RouteTracker"
import { useTime } from "../time"
import elImg from "../assets/img/el.svg"
import busImg from "../assets/img/bus.svg"
import terra from "../assets/img/logo_black.png"
import type { TimeInfo } from "../data/TimeInfo"

interface TrackerProps {
    routes: Route[]
}

interface Route {
    id: string
    routeName: string
    routeNumber?: string
    direction: string
    vehicleType: 'EL' | 'BUS'
    arrivals: TimeInfo[]
}

const BLUE_LINE_BLUE = '#00a1de'
const BELMONT_PURPLE = '#993366'
const KIMBALL_MUSTARD = '#666600'
const TERRA_COTTA = '#A66424'
const TERRA_FILTER = 'invert(39%) sepia(17%) saturate(3272%) hue-rotate(355deg) brightness(97%) contrast(74%)'

const EL_STOPS = [
    {
        id: 'Blue5',
        icon: elImg,
        routeName: 'Blue',
        direction: 'Forest Park',
        backgroundColor: BLUE_LINE_BLUE,
    },
    {
        id: 'Blue1',
        icon: elImg,
        routeName: 'Blue',
        direction: 'O\'Hare',
        backgroundColor: BLUE_LINE_BLUE,
    },
]

const BUS_STOPS = [
    {
        id: '77Eastbound',
        icon: busImg,
        routeName: 'Belmont',
        routeNumber: '77',
        direction: 'East',
        backgroundColor: BELMONT_PURPLE,
    }, 
    {
        id: '77Westbound',
        icon: busImg,
        routeName: 'Belmont',
        routeNumber: '77',
        direction: 'West',
        backgroundColor: BELMONT_PURPLE,
    },
    {
        id: '82Northbound',
        icon: busImg,
        routeName: 'Kimball',
        routeNumber: '82',
        direction: 'North',
        backgroundColor: KIMBALL_MUSTARD,
    },
    {
        id: '82Southbound',
        icon: busImg,
        routeName: 'Kimball',
        routeNumber: '82',
        direction: 'South',
        backgroundColor: KIMBALL_MUSTARD,
    }
]

const Tracker = ({routes}: TrackerProps) => {
    const {currentTime} = useTime()
    const [milHour, minute] = currentTime.split(":").map(s => Number.parseInt(s))
    const hour = milHour > 12 ? milHour - 12 : (milHour == 0 ? 12 : milHour)
    return (
        <>
            <Stack 
                spacing={2} 
                justifyContent="space-between"
                sx={{height: '95vh', maxHeight: '95vh'}}
            >
                <Typography 
                    variant="h1" 
                    align="center"
                    paddingTop={6} 
                >
                        Nearby Transit Times
                </Typography>
                <Stack paddingLeft={16}>
                    <Stack spacing={4} justifyContent="flex-start">
                        {
                            EL_STOPS.map(s => (
                                <RouteTracker 
                                    {...s}
                                    arrivals={routes.find(r => r.id === s.id)?.arrivals ?? []}
                                    key={s.id} 
                                />))
                        }
                    </Stack>
                    <Stack spacing={4} justifyContent="flex-start" paddingTop={8}>
                        {
                            BUS_STOPS.map(s => (
                                <RouteTracker 
                                    {...s}
                                    arrivals={routes.find(r => r.id === s.id)?.arrivals ?? []}
                                    key={s.id} 
                                />))
                        }
                    </Stack>
                </Stack>?
                <Stack 
                    direction="row" 
                    justifyContent="space-between"
                    alignItems="center"
                    paddingLeft={16}
                    paddingRight={16}
                >
                    <Stack>
                        <Typography
                            variant="h2"
                            color={TERRA_COTTA}
                        >
                            {`Time ${hour}:${('0' + minute).slice(-2)}`}
                        </Typography>
                        <Typography
                            variant="body2"
                            color={TERRA_COTTA}
                        >
                            Data provided by Chicago Transit Authority
                        </Typography>
                    </Stack>
                    <div style={{width: '33pc'}}>
                        <img 
                            src={terra} 
                            style={
                                {
                                    width: "33%", 
                                    float: "right",
                                    filter: TERRA_FILTER
                                }
                            }
                        />
                    </div>
                </Stack>
            </Stack>
        </>
    )
}

export { Tracker }