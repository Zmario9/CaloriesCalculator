import { Dispatch } from "react";
import { ActivityActions, ActivityState } from "../../../reducers/activity-reducer";

export type FormProps = {
    dispatch: Dispatch<ActivityActions>,
    state: ActivityState
}