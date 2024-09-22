import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { item: "Home", key: "homepage", route: "/" },
  { item: "About Us", key: "about", route: "/about" },
  { item: "Sponsors", key: "sponsor", route: "/sponsor" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 mx-auto pt-4 pb-4 px-6 md:p-10 bg-black text-gray-200 shadow-md z-50 md:top-10 md:rounded-lg md:max-w-3xl">
      <div className="flex justify-center items-center relative">
        <ul className="hidden md:flex md:flex-row md:gap-4 md:items-center text-sm md:text-lg font-sans">
          {navItems.map(({ item, key, route }) => (
            <motion.li
              key={key}
              className="mx-2 md:mx-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <NavLink
                to={route}
                className={({ isActive }) =>
                  `hover:text-gray-400 transition-colors duration-300 ${
                    isActive ? "text-gray-300" : ""
                  }`
                }
              >
                {item}
              </NavLink>
            </motion.li>
          ))}
        </ul>
        <motion.div
          className="md:hidden absolute right-0"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <button
            onClick={toggleMenu}
            className="text-gray-200 focus:outline-none p-2 mt-10"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </motion.div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden flex flex-col mt-4 bg-black p-4 rounded-b-lg"
          >
            {navItems.map(({ item, key, route }) => (
              <motion.li
                key={key}
                className="my-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <NavLink
                  to={route}
                  className={({ isActive }) =>
                    `hover:text-gray-400 transition-colors duration-300 ${
                      isActive ? "text-gray-300" : ""
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </NavLink>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
