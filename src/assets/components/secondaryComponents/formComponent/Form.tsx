import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { categories } from "../../data/categories";
import { Activity } from "../../../types";
import { FormProps } from "./formType";

const initialState:Activity = {
  id: uuidv4(),
  category: 1,
  name: "",
  calories: 0,
};

export default function Form({ dispatch, state }: FormProps) {
  const [activity, setActivity] = useState<Activity>(initialState);
  useEffect(() => {
    if (state.activeId) {
      //me traera el activity que tenga la misma ID.
      //El 0 es para que retorne en este caso, un arreglo que tendrá un objeto en la posicion 0
      const selectedActivity = state.activities.filter((stateActivity) => stateActivity.id === state.activeId)[0];
      setActivity(selectedActivity);
    }
  }, [state.activeId, state.activities]);
  //Metodo para definir varios tipos de datos que van a pasar por parametro en una variable a la funcion
  const handleChange = (
    e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>
  ) => {
    const isNumberField = ["category", "calories"].includes(e.target.id);

    setActivity({
      //Aqui descomprimo el value de las demas props de activity para que no se pierdan.
      ...activity,
      /*
      Verifico si es un campo de numero, si lo es, verifico que ese valor sea de tipo string, y si lo es, lo convierto en number,
      sino lo es, lo convierto en un campo vació "" para que me permita borrar el cero del input. 
      */
      [e.target.id]: isNumberField
        ? e.target.value.toString() === ""
          ? ""
          : +e.target.value
        : e.target.value,
    });
  };

  const isValidActivity = () => {
    //No se extrae  category porque por default siempre será 1 y 2.
    const { name, calories } = activity;
    //Retornará el valor de name sin espacios al inicio y si calorias es mayor a 0
    return name.trim() !== "" && calories > 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch({
      type: "save-activity",
      payload: { newActivity: activity },
    });
    setActivity({...initialState, id: uuidv4()});
  };

  return (
    <form
      className="space-y-5 bg-white shadow p-10 rounded-lg"
      onSubmit={handleSubmit}
    >
      <p>Formulario</p>
      <div className="grid grid-cols-1 gap-3">
        <label className="font-bold" htmlFor="category">
          Categoría:
        </label>
        <select
          className="border border-slate-300 p-2 rounded-lg w-full bg-white"
          id="category"
          value={activity.category}
          onChange={handleChange}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <div className="grid grid-cols-1 gap-3">
          <label htmlFor="name" className="font-bold">
            Actividad:
          </label>
          <input
            className="border border-slate-300 p-2 rounded-lg w-full bg-white"
            type="text"
            id="name"
            placeholder={
              activity.category === 1
                ? "Ej. Comida, Jugo de naranja, Ensalada"
                : "Ej. Ejercicio, Pesas, Bicicleta"
            }
            value={activity.name}
            onChange={handleChange}
          />
        </div>
        <div className="grid grid-cols-1 gap-3">
          <label htmlFor="calories" className="font-bold">
            Calorias:
          </label>
          <input
            className="border border-slate-300 p-2 rounded-lg w-full bg-white"
            type="number"
            id="calories"
            placeholder="Ej. Calorias. Ej. 300 o 500"
            value={activity.calories}
            onChange={handleChange}
          />
        </div>
      </div>
      <input
        type="submit"
        className="
        bg-gray-800 
        border border-transparent 
        cursor-pointer 
        hover:border-lime-600
        hover:bg-white 
        hover:text-lime-600 
        duration-200 
        w-full uppercase 
        p-2 font-bold 
        text-white 
        rounded-lg 
        disabled:opacity-50 
        disabled:cursor-not-allowed 
        disabled:hover:bg-gray-800
        disabled:hover:text-white
        disabled:hover:border-transparent"
        value={activity.category === 1 ? "Guardar Comida" : "Guardar Ejercicio"}
        disabled={!isValidActivity()}
      />
    </form>
  );
}
