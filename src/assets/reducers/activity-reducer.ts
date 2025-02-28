//Traigo el type activity de types
import { unstable_batchedUpdates } from "react-dom"
import { Activity } from "../types"
//Defino un tipe para las acciones que se haran en el reducer
export type ActivityActions = {
    //Tipo de accion
    type:'save-activity',
    //El payload es de tipo activity, es el dato a agregar a tu state.
    payload: { newActivity:Activity }
} | {
    type:'set-activeId',
    payload: { id: Activity['id'] }
}
/*
Defino el state complejo y decimos que es un arreglo
que almacena informacion de tipo activity
*/
export type ActivityState = {
    activities: Activity[],
    activeId: Activity['id']
}

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
            auth: false
        }
    }
    if (action.type === 'set-activeId') {
        return {
            ...state,
            activeId: action.payload.id
        }
    }
    return state;
}