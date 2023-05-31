import { Button } from "components/common";

const Search: React.FC = () => {
  return (
    <div className="flex flex-row items-center gap-8">
      <input
        type="text"
        placeholder="Search"
        className="bg-neutral-100 p-4 placeholder:text-neutral-500 text-lg rounded-full border-none outline-none focus:border-none focus:outline-none active:border-none active:outline-none"
      />
      <Button size="lg">Search</Button>
    </div>
  );
};

export default Search;
