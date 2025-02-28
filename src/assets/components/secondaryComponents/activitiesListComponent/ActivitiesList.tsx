import { useMemo } from "react";
import { activitiesListProps } from "./activitiesType";
import { categories } from "../../data/categories";
import { Activity } from "../../../types";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
export default function ActivitiesList({
  activities,
  dispatch,
}: activitiesListProps) {
  const categoryName = useMemo(
    () => (category: Activity["category"]) =>
      categories.map((c) => (c.id === category ? c.name : "")),
    [activities]
  );
  return (
    <>
      <h2 className="text-4xl font-bold text-slate-600 text-center">
        { activities.length === 0 ? "Aún no hay actividades registradas" : "Comidas y Actividades"}
      </h2>
      {activities.map((activity) => (
        <div
          key={activity.id}
          className="px-5 py-10 bg-white mt-5 flex justify-between"
        >
          <div className="space-y-2 relative">
            {/* {activity.category === 1 ? (
              <p className="font-bold">Comida: {activity.name}</p>
            ) : (
              <p className="font-bold">Actividad: {activity.name}</p>
            )} */}
            <p
              className={`absolute -top-8 -left-8 px-10 py-2 text-white uppercase font-bold ${
                activity.category === 1 ? "bg-lime-500" : "bg-orange-500"
              }`}
            >
              {categoryName(+activity.category)}
            </p>
            <p className="text-2xl font-bold pt-5">{activity.name}</p>
            <p className="font-black text-4xl text-lime-500">
              {activity.calories} {""}
              <span>Calorias</span>
            </p>
          </div>
          <div className="flex gap-5 items-center">
            <button
              onClick={() =>
                dispatch({ type: "set-activeId", payload: { id: activity.id } })
              }
            >
              <PencilSquareIcon className="h-8 w-8 cursor-pointer text-gray-800" />
            </button>
            <button
              onClick={() =>
                dispatch({
                  type: "delete-activity",
                  payload: { id: activity.id },
                })
              }
            >
              <TrashIcon className="h-8 w-8 cursor-pointer text-red-800" />
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
