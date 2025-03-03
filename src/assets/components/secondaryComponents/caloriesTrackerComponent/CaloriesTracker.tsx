import CaloriesDisplay from "../caloriesDisplayComponent/CaloriesDisplay";
import { CaloriesTrackerProps } from "./caloriesTrackerType";
import { useMemo } from "react";
export default function CaloriesTracker({ activities }: CaloriesTrackerProps) {
  //Con ayuda de reduce puedo calcular la cantidad de calorias consumidas sin tener que crear const de arreglos y cosas
  const caloriesConsumed = useMemo(
    () =>
      activities.reduce(
        (total, activity) =>
          activity.category === 1 ? total + activity.calories : total,
        0
      ),
    [activities]
  );
  const caloriesBurned = useMemo(
    () =>
      activities.reduce(
        (total, activity) =>
          activity.category === 2 ? total + activity.calories : total,
        0
      ),
    [activities]
  );

  const totalCalories = useMemo(
    () => caloriesConsumed - caloriesBurned,
    [caloriesConsumed, caloriesBurned]
  );

  const caloriesMessage = useMemo(
    () =>
      totalCalories !== 0
        ? totalCalories > 0
          ? "Exceso de calorias"
          : "Déficit de calorias"
        : "¡Equilibrado! :D",
    [totalCalories]
  );

  return (
    <>
      <h2 className="text-4xl font-black text-white text-center">
        Resumen de Calorias
      </h2>
      <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
        <CaloriesDisplay
          calories={caloriesConsumed}
          text={"Calorias consumidas"}
        />
        <CaloriesDisplay
          calories={caloriesBurned}
          text={"Calorias quemadas"}
        />
        <CaloriesDisplay
          calories={totalCalories}
          text={caloriesMessage}
          isTotal={true}
        />
      </div>
    </>
  );
}
