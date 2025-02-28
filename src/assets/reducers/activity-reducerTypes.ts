//Llamo al tipo activity para poder trabajar mejor
import { Activity } from "../types";
//Defino un type para las acciones que se haran en el reducer
export type ActivityState = {
    activities: Activity[],
    activeId: Activity['id']
}

export type ActivityActions = {
    //Tipo de accion
    type:'save-activity',
    //El payload es de tipo activity, es el dato a agregar a tu state.
    payload: { newActivity:Activity }
} | {
    type:'set-activeId',
    payload: { id: Activity['id'] }
} | {
    type:'delete-activity',
    payload: { id: Activity['id'] }
}