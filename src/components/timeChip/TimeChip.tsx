import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { type JSX, type PropsWithChildren } from "react"

export interface TimeChipProps extends PropsWithChildren{
    id: string
    expectedTime?: string
    currentTime: string
    backgroundColor: string
}

const getMinutesToArrival = (currentTime: string, expectedTime: string): number => {
    const [cHour, cMins] = currentTime.split(':').map(s => Number.parseInt(s))
    const [eHour, eMins] = expectedTime.split(':').map(s => Number.parseInt(s))
    let correctedEHour = eHour

    // Between 1:00 PM and Midnight
    if(cHour >= 13){
        correctedEHour = eHour + 12
    }
    // Case Midnight
    if(cHour == 0 && eHour == 12){
        correctedEHour = 0
    }
    const minutesNow = cHour * 60 + cMins
    let minutesExpected = correctedEHour * 60 + eMins

    return minutesExpected - minutesNow
}

interface CountdownProps {
    minutesToArrival: number
}

const Countdown = ({minutesToArrival}: CountdownProps): JSX.Element => {
    return (
        <>
        {
            minutesToArrival <= 2 ?
                (<Typography variant="minutes">Due</Typography>)
                :
                (
                    <Stack direction="row">
                        <Typography variant="minutes">
                            {`${minutesToArrival} min`}
                        </Typography>
                    </Stack>
                )
            
        }
        </>
    )
}

const TimeChip = (props: TimeChipProps) => {
    const { 
        expectedTime, 
        currentTime, 
        backgroundColor 
    } = props
    
    const minutesToArrival = getMinutesToArrival(currentTime, expectedTime ?? '00:00')
    
    return (
        <Card sx={{alignContent: "center", background: backgroundColor}}>
            <CardContent sx={{ padding: 3 }}>
                <Stack>
                    <Countdown minutesToArrival={minutesToArrival} />
                    <Typography variant="destination">{expectedTime}</Typography>
                </Stack>
            </CardContent>
        </Card>
    )
}

export { TimeChip }