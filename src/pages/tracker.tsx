import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { RouteTracker, type RouteTrackerProps } from "../components/routeTracker/RouteTracker"

interface TrackerProps {
    routes: RouteTrackerProps[]
}


const Tracker = ({routes}: TrackerProps) => {

    return (
        <>
            <Stack spacing={2}>
                <Typography variant="h1" align="center">Nearby Transit Times</Typography>
                <Stack spacing={2} justifyContent="flex-start">
                    {
                        routes.map(r => (<RouteTracker {...r} />))
                    }
                </Stack>
            </Stack>
        </>
    )
}

export { Tracker }