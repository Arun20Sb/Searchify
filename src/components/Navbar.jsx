import { Link } from "react-router-dom";
import logo from "../assets/searchify.jpg";

function Navbar({ darkTheme, setDarkTheme }) {
  return (
    <div className="p-5 pb-1 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200 specialNav sm:mb-2 bg-gray-800">
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to="/">
          <img
            src={logo}
            alt="Searchify Logo"
            className="h-20 w-auto rounded-2xl shadow-md hover:opacity-90 transition duration-300"
          />
        </Link>
        <button
          type="button"
          onClick={() => setDarkTheme(!darkTheme)}
          className="text-xl dark:bg-gray-50 dark:text-gray-900 border bg-white rounded-full px-2 py-1 hover:shadow-lg"
        >
          {darkTheme ? "Light💡" : "Dark🌙"}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
