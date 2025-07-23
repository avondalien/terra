import type { RouteInfo } from "./RouteInfo";


const HOSTNAME = "http://localhost:8787"
const PATHNAME = "/api/v1/locations/terra"
const API_KEY = "abc123"

const getTransitData = async (): Promise<RouteInfo[]> => {
    
    const result = await fetch(`${HOSTNAME}${PATHNAME}`, {
        headers: [
            ["apiKey", API_KEY]
        ]
    })

    const serverObj = await result.json()
    
    if(serverObj.success !== true){
        return []
    }

    const arrivalsByLine = serverObj.location.routes as RouteInfo[]

    return arrivalsByLine
}

export { getTransitData }