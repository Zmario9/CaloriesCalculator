//Traigo el type activity de types
import { Activity } from "../types"
import { ActivityState, ActivityActions } from "./activity-reducerTypes"

export const initialState: ActivityState = {
    activities: [],
    activeId:''
}

export const activityReducer = (
    state: ActivityState = initialState,
    action: ActivityActions
) => {
    if (action.type === 'save-activity') {
        let updatedActivity: Activity[] = [];
        if (state.activeId) {
            updatedActivity = state.activities.map(activity => activity.id === state.activeId ? action.payload.newActivity : activity);
        } else {
            updatedActivity = [...state.activities, action.payload.newActivity]
        }
        return {
            ...state,
            activities: updatedActivity,
            activeId:''
        }
    }
    if (action.type === 'set-activeId') {
        return {
            ...state,
            activeId: action.payload.id
        }
    }
    if (action.type === 'delete-activity') {
        return {
            //Mantengo lo que esté en el state que pueda estar en el formulario
            ...state,
            //Filtro para encontrar el activity que quiero borrar
            activities: state.activities.filter(activity => activity.id !== action.payload.id)
        }
    }
    return state;
}