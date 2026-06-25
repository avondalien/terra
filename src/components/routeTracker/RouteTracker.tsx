import Typography from "@mui/material/Typography";
import type { PropsWithChildren } from "react";
import { TimeChip } from "../timeChip";
import Stack from "@mui/material/Stack";
import { useTime } from "../../time";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import type { TimeInfo } from "../../data/TimeInfo";

interface RouteTrackerProps extends PropsWithChildren {
    id: string
    icon: string
    routeName: string
    routeNumber?: string
    direction: string
    backgroundColor: string
    arrivals: TimeInfo[]
}

const RouteTracker = (props: RouteTrackerProps) => {
    const {
        routeName, 
        routeNumber, 
        direction, 
        arrivals, 
        icon,
        backgroundColor,
    } = props
    const { currentTime } = useTime()
    const routeTitle = (routeNumber ? `${routeNumber} - ` : '') + routeName;

    return (
        <Stack direction="row" spacing={4} alignItems="stretch">
            <Card sx={{background: backgroundColor, width: '20%', display: 'flex', alignItems: 'center', minHeight: '55px'}}>
                <CardContent sx={{ padding: '6px', '&:last-child': { paddingBottom: '6px' }, width: '100%' }}>
                    <Stack
                        direction="row"
                        spacing={2}
                        alignItems="center"
                        justifyContent="left"
                    >
                        <img
                            src={icon}
                            style={{ maxHeight: '33px', maxWidth: '33px' }}
                        />
                        <Stack 
                            alignSelf="center" 
                        >
                            <Typography 
                                variant="h2" 
                            >
                                {routeTitle}
                            </Typography>
                            <Typography 
                                variant="h2" 
                            >
                                {direction}
                            </Typography>  
                        </Stack>
                    </Stack>
                </CardContent>
            </Card>
            {arrivals.slice(0, 5).map(t => (
                <TimeChip 
                    id={t.id}
                    key={t.id} 
                    currentTime={currentTime} 
                    expectedTime={t.expectedTime}
                    backgroundColor={backgroundColor}
                />)
            )}
        </Stack>

    )
}

export { RouteTracker, type RouteTrackerProps }