import { Activity } from "../../../types";
import { ActivityActions } from "../../../reducers/activity-reducerTypes";
import { Dispatch } from "react";
export type activitiesListProps = {
    activities: Activity[],
    dispatch: Dispatch<ActivityActions>
}