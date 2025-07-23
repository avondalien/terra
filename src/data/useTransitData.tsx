import { useEffect, useRef, useState } from "react"
import type { RouteInfo } from "./RouteInfo"
import { getTransitData } from "./getTransitData"

const useTransitData = () => {
    const [transitData, setTransitData] = useState<RouteInfo[]>([])
    const [error, setError] = useState<boolean>(false)
    const timerRef = useRef(0)

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await getTransitData()
                setError(false)
                setTransitData(data)
            } catch (e) {
                console.error(JSON.stringify(e))
                setError(true)
            }
        }

        getData()
        timerRef.current = setInterval(getData, 60000)

        return () => clearInterval(timerRef.current)
    }, [])

    return { transitData, error }
}

export { useTransitData }