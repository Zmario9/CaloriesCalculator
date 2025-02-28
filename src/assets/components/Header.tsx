
import { headerProps } from "./headerType";
export default function Header({ isEmpty }: headerProps) {
  return (
    <header className="bg-lime-600 py-3">
      <div className="max-w-4xl mx-auto flex justify-between">
        <h1 className="text-center text-lg font-bold text-white uppercase">
          Contador de calorias
        </h1>
        <button className="bg-gray-800 hover:bg-gray-900 p-2 font-bold uppercase text-white cursor-pointer rounded-lg text-sm" disabled={isEmpty}>Reiniciar App</button>
      </div>
    </header>
  );
}
