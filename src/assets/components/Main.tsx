import Form from "./secondaryComponents/formComponent/Form";
import ActivitiesList from "./secondaryComponents/activitiesListComponent/activitiesList";
import { useReducer } from "react";
import { activityReducer, initialState } from "../reducers/activity-reducer";
export default function Main() {
  //Dispatch = Funcion especial que permitira ejecutar las acciones de reducer.
  const [state, dispatch] = useReducer(activityReducer, initialState);
  // console.log(state);
  return (
    <main>
      <section className="bg-lime-500 py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <Form dispatch={dispatch} state={state} />
        </div>
      </section>
      <section className="p-10 mx-auto max-w-4xl">
        <ActivitiesList activities={state.activities} dispatch={dispatch} />
      </section>
    </main>
  );
}
