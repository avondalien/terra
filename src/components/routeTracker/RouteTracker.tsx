import Typography from "@mui/material/Typography";
import type { PropsWithChildren } from "react";
import { TimeChip, type TimeChipProps } from "../timeChip";
import Stack from "@mui/material/Stack";
import { useTime } from "../../time";

interface RouteTrackerProps extends PropsWithChildren {
    id: string
    icon: string
    routeName: string
    routeNumber?: string
    direction: string
    arrivals: TimeChipProps[]
}

const RouteTracker = (props: RouteTrackerProps) => {
    const {routeName, routeNumber, direction, arrivals, icon} = props
    const { currentTime } = useTime()
    const routeTitle = (routeNumber ? `${routeNumber} - ` : '') + routeName;

    return (
        <>
            <Stack direction="row" spacing={4}>
                <Stack 
                    direction="row" 
                    spacing={2}
                    sx={{width: '20%'}} 
                    alignItems="center" 
                    justifyContent="right"
                >
                    <Stack alignSelf="center">
                        <Typography variant="h2" align="right">{routeTitle}</Typography>
                        <Typography variant="h2" align="right">{direction}</Typography>  
                    </Stack>
                    <img src={icon} style={{maxHeight: '100px', maxWidth: '100px'}}/>
                </Stack>
                {arrivals.slice(0, 5).map(t => (
                    <TimeChip 
                        id={t.id}
                        key={t.id} 
                        currentTime={currentTime} 
                        expectedTime={t.expectedTime}
                        destination={t.destination}
                    />)
                )}
            </Stack>
        </>
    )
}

export { RouteTracker, type RouteTrackerProps }