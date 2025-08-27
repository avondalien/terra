import { createContext, useContext, type JSX, type PropsWithChildren } from "react";
import { useCurrentTime } from "./useCurrentTime";

interface ITimeContext {
    currentTime: string
}

const TimeContext = createContext({currentTime: '00:00'});

const TimeProvider = ({children}: PropsWithChildren): JSX.Element => {
    const time = useCurrentTime()

    return (
        <TimeContext value={{currentTime: time}}>
            {children}
        </TimeContext>
    )

}

const useTime = (): ITimeContext => {
    const time = useContext(TimeContext)
    return time
}

export { TimeProvider, useTime }