import { ActivityState } from "../reducers/activity-reducerTypes"
export type MainType = {
    appState: ActivityState,
    setAppState: (newState: ActivityState) => void
}