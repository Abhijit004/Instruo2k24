import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold bg-gradient-to-r from-blue-200 via-blue-300 to-cyan-200 text-transparent bg-clip-text">
              Instruo 2024
            </h2>
          </div>
          <nav className="mb-4 md:mb-0">
            <ul className="flex space-x-4">
              {["Home", "About Us", "Sponsors"].map((item) => (
                <li key={item}>
                  <Link
                    to={`#`}
                    className="hover:text-blue-400 transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex space-x-4">
            {[
              { icon: FaFacebookF, name: "Facebook" },
              { icon: FaTwitter, name: "Twitter" },
              { icon: FaInstagram, name: "Instagram" },
              { icon: FaLinkedinIn, name: "LinkedIn" },
            ].map(({ icon: Icon, name }) => (
              <a
                key={name}
                href="#"
                className="text-white hover:text-blue-400 transition-colors duration-300"
                aria-label={`${name} link`}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Instruo. All rights reserved.</p>
          <p>Created by IIEST Shibpur</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
