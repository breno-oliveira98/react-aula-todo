import { PencilSimple, TrashSimple } from "phosphor-react"
import { Button } from "../Button/Button";

export const TodoItem = () => {
  return (
    <>
      <ul className="w-full mt-8">
        <li className="flex justify-between items-center border-b border-gray-300 py-2">
          <p className="text-lg">Buy groceries</p>
          <div className="flex gap-1">
            <Button><PencilSimple className="text-[#CDCDCD] hover:text-[--primary]" size={18} /></Button>
            <Button><TrashSimple className="text-[#CDCDCD] hover:text-red-500" size={18} /></Button>
          </div>
        </li>
      </ul>
    </>
  );
};
