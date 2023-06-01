import { useLocation } from "react-router-dom";
import navigation from "config/navigation";

const Navbar: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <div className="py-5 bg-white shadow-2xl rounded-tl-3xl flex flex-row items-center justify-evenly rounded-tr-3xl">
      {navigation.map(({ label, icon: Icon, path }) => (
        <div
          key={label}
          className="rounded-full bg-neutral-100 flex flex-row items-center gap-3 cursor-pointer"
        >
          <div
            className={`${
              pathname === path ? "bg-black rounded-full p-3" : "bg-transparent"
            }`}
          >
            <Icon />
          </div>
          <span
            className={`${
              pathname === path
                ? "block font-medium text-black py-2 pr-4"
                : "hidden"
            }`}
          >
            {label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
