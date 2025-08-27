import { useState } from "react"

const getCurrentTimeString = (): string => {
    const currentTimeAsDate = new Date()
    return currentTimeAsDate.toLocaleTimeString('en-US', {hour12: false, hour: "2-digit", minute: "2-digit"})
}

const useCurrentTime = (): string => {

    const [currentTime, setCurrentTime] = useState(getCurrentTimeString())

    setInterval(() => {
        setCurrentTime(getCurrentTimeString())
    }, 1000)

    return currentTime
}

export {useCurrentTime}