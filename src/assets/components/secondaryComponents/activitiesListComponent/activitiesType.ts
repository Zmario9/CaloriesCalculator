import { Activity } from "../../../types";
import { ActivityActions } from "../../../reducers/activity-reducer";
import { Dispatch } from "react";
export type activitiesListProps = {
    activities: Activity[],
    dispatch: Dispatch<ActivityActions>
}