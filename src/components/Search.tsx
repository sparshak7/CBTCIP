import { useSearchContext } from "../hooks/useSearchContext";
import { Input } from "./ui/input";

const Search = () => {
  const { setQuery } = useSearchContext();

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const target = e.target as HTMLInputElement;
      setQuery(target.value);
    }
  };

  return (
    <div className="relative">
      <span className="absolute inset-y-0 right-0 pr-2 flex items-center pointer-events-none">
        <div className="px-1 rounded-2xl z-20 bg-primary font-semibold text-xs">
          Enter (↵)
        </div>
      </span>
      <Input
        onKeyUp={handleKeyUp}
        type="text"
        placeholder="Search..."
        className="pr-10"
      />
    </div>
  );
};

export default Search;
