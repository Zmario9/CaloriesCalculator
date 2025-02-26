import Form from "./secondaryComponents/Form"
import { useReducer } from "react"
import { activityReducer, initialState } from "../reducers/activity-reducer"
export default function Main() {
  //Dispatch = Funcion especial que permitira ejecutar las acciones de reducer.
  const [state, dispatch] = useReducer(activityReducer, initialState);
  return (
    <main className="bg-lime-500 py-20 px-5">
        <div className="max-w-4xl mx-auto">
            <Form dispatch = {dispatch}/>
        </div>
    </main>
  )
}
