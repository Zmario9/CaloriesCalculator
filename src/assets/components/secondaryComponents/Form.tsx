import { categories } from "../data/categories";
import { useState, ChangeEvent } from "react";
import { Activity } from "../../types";
export default function Form() { 
  const [activity, setActivity] = useState<Activity>({
    category: 1, 
    name: '',
    calories: 0
  });
  //Metodo para definir varios tipos de datos que van a pasar por parametro en una variable a la funcion
  const handleChange=(e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>)=> {
    //El "e.target.name" dentro de los corchetes de arreglo permite interpolar la propiedad del objeto
    setActivity({
      //Aqui descomprimo el value de las demas props de activity para que no se pierdan.
      ...activity,
      [e.target.id]: e.target.value
    });
    console.log(e.target.value);
  }

  return (
    <form className="space-y-5 bg-white shadow p-10 rounded-lg">
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
            placeholder="Ej. Comida, Jugo de naranja, Ensalada, Ejercicio, Pesas, Bicicleta"
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
        className="bg-gray-800 border border-transparent cursor-pointer hover:border-lime-600 hover:bg-white hover:text-lime-600 duration-200 w-full uppercase p-2 font-bold text-white rounded-lg"
        value={activity.category == 1 ? "Guardar Comida": "Guardar Ejercicio"}
      />
    </form>
  );
}
