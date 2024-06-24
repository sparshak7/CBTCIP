import { Input } from "./ui/input";
import { useSearchContext } from "./hooks/useSearchContext";

const Navbar = () => {
  const {setQuery} = useSearchContext();

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const target = e.target as HTMLInputElement;
      setQuery(target.value);
    }
  };

  return (
    <nav className="container mx-auto flex justify-between items-center border-b border-border py-4">
      <div className="italic tracking-wider font-medium">
        Weather<span className="text-cyan-300">Vue</span>
      </div>
      <div className="">
        <Input
          onKeyUp={handleKeyUp}
          type="text"
          placeholder="Search for a particular place"
        />
      </div>
    </nav>
  );
};

export default Navbar;
