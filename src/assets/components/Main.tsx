import Form from "./secondaryComponents/formComponent/Form";
import ActivitiesList from "./secondaryComponents/activitiesListComponent/ActivitiesList";
import { useReducer, useEffect, useMemo } from "react";
import { activityReducer, initialState } from "../reducers/activity-reducer";
import Header from "./Header";
import CaloriesTracker from "./secondaryComponents/caloriesTrackerComponent/CaloriesTracker";
export default function Main() {
  //Dispatch = Funcion especial que permitira ejecutar las acciones de reducer.
  const [state, dispatch] = useReducer(activityReducer, initialState);
  useEffect(() => {
    localStorage.setItem("activities", JSON.stringify(state.activities));
  }, [state.activities]);

  const canRestartApp = useMemo(() => state.activities.length > 0, [state.activities]);

  return (
    <>
      <Header dispatch={dispatch} canRestartApp={canRestartApp} />
      <main>
        <section className="bg-lime-500 py-20 px-5">
          <div className="max-w-4xl mx-auto">
            <Form dispatch={dispatch} state={state} />
          </div>
          
        </section>
        <section className="bg-gray-800 py-10">
          <div className="max-w-4xl mx-auto">
            <CaloriesTracker activities={state.activities}/>
          </div>
        </section>
        <section className="p-10 mx-auto max-w-4xl">
          <ActivitiesList activities={state.activities} dispatch={dispatch} />
        </section>
      </main>
    </>
  );
}
