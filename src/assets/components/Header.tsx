import { headerProps } from "./headerType";
export default function Header({ canRestartApp, dispatch }: headerProps) {
  return (
    <header className="bg-lime-600 py-3">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <h1 className="text-center text-lg font-bold text-white uppercase">
          Contador de calorias
        </h1>
        <button
          className="duration-200 bg-gray-800 hover:bg-gray-900 p-2 font-bold uppercase text-white cursor-pointer rounded-lg text-sm disabled:opacity-50 disabled:hover:bg-gray-800 disabled:cursor-not-allowed"
          disabled={!canRestartApp}
          onClick={()=>dispatch({ type: "restart-app" })}
        >
          Reiniciar App
        </button>
      </div>
    </header>
  );
}
