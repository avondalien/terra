import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { RouteTracker, type RouteTrackerProps } from "../components/routeTracker/RouteTracker"
import { useTime } from "../time"
import elImg from "../assets/img/el.svg"
import busImg from "../assets/img/bus.svg"

interface TrackerProps {
    routes: RouteTrackerProps[]
}

const STATIONS = [
    {
        id: 'Blue5',
        icon: elImg,
        routeName: 'Blue',
        direction: 'Forest Park',
    },
    {
        id: 'Blue1',
        icon: elImg,
        routeName: 'Blue',
        direction: 'O\'Hare',
    },
    {
        id: '77Eastbound',
        icon: busImg,
        routeName: 'Belmont',
        routeNumber: '77',
        direction: 'Eastbound',
    }, 
    {
        id: '77Westbound',
        icon: busImg,
        routeName: 'Belmont',
        routeNumber: '77',
        direction: 'Westbound',
    },
    {
        id: '82Northbound',
        icon: busImg,
        routeName: 'Kimball-Homan',
        routeNumber: '82',
        direction: 'Northbound',
    },
    {
        id: '82Southbound',
        icon: busImg,
        routeName: 'Kimball-Homan',
        routeNumber: '82',
        direction: 'Southbound',
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
                <Stack spacing={4} justifyContent="flex-start">
                    {
                        STATIONS.map(s => (
                            <RouteTracker 
                                {...s}
                                arrivals={routes.find(r => r.id === s.id)?.arrivals ?? []}
                                key={s.id} 
                            />))
                    }
                </Stack>
                <Stack direction="column" justifyContent="space-evenly">
                    <Typography
                        variant="h2"
                        align="center"
                    >
                        {`Time ${hour}:${minute}`}
                    </Typography>
                    <Typography
                        variant="body2"
                        align="center"
                    >
                        Data provided by Chicago Transit Authority
                    </Typography>

                </Stack>
            </Stack>
        </>
    )
}

export { Tracker }