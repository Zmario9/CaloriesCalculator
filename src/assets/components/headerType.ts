import { ActionDispatch } from "react";
import { ActivityActions } from "../reducers/activity-reducerTypes";
export type headerProps={
    dispatch: ActionDispatch<[action: ActivityActions]>
    canRestartApp: boolean
}