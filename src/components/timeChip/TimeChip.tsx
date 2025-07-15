import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { PropsWithChildren } from "react"
import { SlGhost } from 'react-icons/sl';

export interface TimeChipProps extends PropsWithChildren{
    actualTime?: string
    scheduledTime: string
    destination: string
    isGhost: boolean
}


const TimeChip = (props: TimeChipProps) => {
    const { actualTime, scheduledTime, destination, isGhost } = props
    const time = isGhost ? scheduledTime : actualTime

    return (
        <Card sx={{alignContent: "center"}}>
            <CardContent sx={{ padding: 2 }}>
                <Typography>{destination}</Typography>
                <Stack spacing={1} direction="row">
                    <Typography>{isGhost && <SlGhost/>}{time}</Typography>
                </Stack>        
            </CardContent>
        </Card>
    )
}

export { TimeChip }