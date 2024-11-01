import { MagnifyingGlass } from "phosphor-react";

export const SearchBar = ({ setTodo }) => {
  return (
      <div className="flex rounded border border-[--primary] flex-1 items-center px-2 w-[750px]">
        <input
          type="text"
          placeholder="Search note..."
          className="flex-1 outline-none"
          onChange={(e) => setTodo(e.target.value)}
        />
        <MagnifyingGlass size={24} className="cursor-pointer" />
      </div>
  );
};
