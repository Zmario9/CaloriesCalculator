import { Dispatch } from "react";
import { ActivityActions, ActivityState } from "../../../reducers/activity-reducerTypes";
export type FormProps = {
    dispatch: Dispatch<ActivityActions>,
    state: ActivityState
}