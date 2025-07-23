import Typography from "@mui/material/Typography";
import type { PropsWithChildren } from "react";
import { TimeChip, type TimeChipProps } from "../timeChip";
import Stack from "@mui/material/Stack";

interface RouteTrackerProps extends PropsWithChildren {
    id: string
    routeName: string
    routeNumber?: string
    direction: string
    arrivals: TimeChipProps[]
}

const RouteTracker = (props: RouteTrackerProps) => {
    const {routeName, routeNumber, direction, arrivals} = props

    const routeTitle = (routeNumber ? `${routeNumber} - ` : '') + routeName;

    return (
        <>
            <Stack direction="row" spacing={2} alignItems="stretch" >
                <Stack sx={{width: '18%'}} alignSelf="center">
                    <Typography variant="h2" align="right">{routeTitle}</Typography>
                    <Typography variant="h2" align="right">{direction}</Typography>  
                </Stack>
                {arrivals.map( (t: TimeChipProps) => (<TimeChip {...t} key={t.id} />))}
            </Stack>
        </>
    )
}

export { RouteTracker, type RouteTrackerProps }