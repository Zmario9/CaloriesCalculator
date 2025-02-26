//Traigo el type activity de types
import { Activity } from "../types"
//Defino un tipe para las acciones que se haran en el reducer
export type ActivityActions = {
    //Tipo de accion
    type:'save-activity',
    //El payload es de tipo activity, es el dato a agregar a tu state.
    payload: { newActivity:Activity }
}
/*
Defino el state complejo y decimos que es un arreglo
que almacena informacion de tipo activity
*/
type ActivityState = {
    activities: Activity[]
}

export const initialState: ActivityState = {
    activities: []
}

export const activityReducer = (
    state: ActivityState = initialState,
    action: ActivityActions
) => {
    if (action.type === 'save-activity') {
        return {
            ...state,
            activities: [...state.activities, action.payload.newActivity],
            auth: false
        }
    }
    return state;
}