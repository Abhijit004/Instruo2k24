import { NavLink } from "react-router-dom";

const navItems = [
  { item: "Home", key: "homepage", route: "/" },
  { item: "About Us", key: "about", route: "/about" },
  { item: "Sponsors", key: "sponsor", route: "/sponsor" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-10 left-0 right-0 mx-auto p-6 md:p-10 bg-black text-gray-200 rounded-lg shadow-md max-w-3xl z-10">
      <ul className="flex flex-row gap-4 justify-center items-center text-sm md:text-lg font-sans">
        {navItems.map(({ item, key, route }) => (
          <li key={key} className="mx-2 md:mx-4">
            <NavLink
              to={route}
              className={({ isActive }) => 
                `hover:text-gray-400 transition-colors duration-300 ${isActive ? 'text-gray-300' : ''}`
              }
            >
              {item}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
