import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { RouteTracker, type RouteTrackerProps } from "../components/routeTracker/RouteTracker"

interface TrackerProps {
    routes: RouteTrackerProps[]
}

const STATIONS = [
    {
        id: 'Blue5',
        routeName: 'Blue',
        direction: 'Forest Park',
    },
    {
        id: 'Blue1',
        routeName: 'Blue',
        direction: 'O\'Hare',
    },
    {
        id: '77Eastbound',
        routeName: 'Belmont',
        routeNumber: '77',
        direction: 'Eastbound',
    }, 
    {
        id: '77Westbound',
        routeName: 'Belmont',
        routeNumber: '77',
        direction: 'Westbound',
    },
    {
        id: '82Northbound',
        routeName: 'Kimball-Homan',
        routeNumber: '82',
        direction: 'Northbound',
    },
    {
        id: '82Southbound',
        routeName: 'Kimball-Homan',
        routeNumber: '82',
        direction: 'Southbound',
    }
]


const Tracker = ({routes}: TrackerProps) => {

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
                <Stack spacing={2} justifyContent="flex-start">
                    {
                        STATIONS.map(s => (
                            <RouteTracker 
                                {...s}
                                arrivals={routes.find(r => r.id === s.id)?.arrivals ?? []}
                                key={s.id} 
                            />))
                    }
                </Stack>
                <Typography
                    variant="body2"
                    align="center"
                >
                    Data provided by Chicago Transit Authority
                </Typography>
            </Stack>
        </>
    )
}

export { Tracker }