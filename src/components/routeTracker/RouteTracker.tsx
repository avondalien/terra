import Typography from "@mui/material/Typography";
import type { PropsWithChildren } from "react";
import { TimeChip, type TimeChipProps } from "../timeChip";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

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
    let times
    if(arrivals.length > 0){
       times = arrivals.map((t) => TimeChip({...t})) 
    } else {
        times = (
            <Card>
                <CardContent>
                    <Typography>
                        No Scheduled Times
                    </Typography>
                </CardContent>
            </Card>
        )
    }

    return (
        <>
            <Stack direction="row" spacing={2} alignItems="stretch" >
                <Stack sx={{width: '18%'}} alignSelf="center">
                    <Typography variant="h2" align="right">{routeTitle}</Typography>
                    <Typography variant="h2" align="right">{direction}</Typography>  
                </Stack>
                {times}
            </Stack>
        </>
    )
}

export { RouteTracker, type RouteTrackerProps }