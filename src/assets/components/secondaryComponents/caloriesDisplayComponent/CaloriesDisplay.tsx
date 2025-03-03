import { CaloriesDisplayProps } from "./caloriesDisplayType";
export default function CaloriesDisplay({
  calories,
  text,
  isTotal,
}: CaloriesDisplayProps) {
  return (
    <>
      <p
        className={
          "text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center"
        }
      >
        <span
          className={`font-black text-6xl ${
            isTotal
              ? calories === 0
                ? "text-lime-500"
                : calories > 0
                ? "text-orange-500"
                : "text-orange-700"
              : ""
          }`}
        >
          {calories}
        </span>
        {text}
      </p>
    </>
  );
}
