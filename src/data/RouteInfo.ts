import type { TimeInfo } from "./TimeInfo"

interface RouteInfo {
    id: string
    routeName: string
    routeNumber?: string
    direction: string
    vehicleType: 'EL' | 'BUS'
    arrivals: TimeInfo[]
}

export { type RouteInfo }
