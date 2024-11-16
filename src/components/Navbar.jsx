import { Link } from "react-router-dom";

function Navbar({ darkTheme, setDarkTheme }) {
  return (
    <div className="p-5 pb-1 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to="/">
          <p className="text-3xl font-semibold text-white bg-blue-500 py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
            Searchify 🔍
          </p>
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
