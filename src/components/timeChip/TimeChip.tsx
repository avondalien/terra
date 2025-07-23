import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { PropsWithChildren } from "react"

export interface TimeChipProps extends PropsWithChildren{
    id: string
    expectedTime?: string
    destination: string
}


const TimeChip = (props: TimeChipProps) => {
    const { expectedTime: expectedTime, destination } = props
    const time = expectedTime

    return (
        <Card sx={{alignContent: "center"}}>
            <CardContent sx={{ padding: 2 }}>
                <Typography>{destination}</Typography>
                <Stack spacing={1} direction="row">
                    <Typography>{time}</Typography>
                </Stack>        
            </CardContent>
        </Card>
    )
}

export { TimeChip }