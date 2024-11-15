import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import Search from "../components/Search";

// const imgUrl =
  // "https://images.pexels.com/photos/220072/pexels-photo-220072.jpeg?auto=compress&cs=tinysrgb&w=600";

function HomePage({ darkTheme, setDarkTheme }) {
  return (
    <>
      <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <Search />

      {/* Navigation Bar with better spacing, colors, and hover effects */}
      <div
        className="flex justify-start items-center space-x-8 py-4 px-6 bg-gray-800 shadow-md mt-6"
        // style={{
        //   backgroundImage: `url(${imgUrl})`,
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        // }}
      >
        <NavLink
          to="/articles"
          className="text-xl font-semibold text-gray-300 hover:text-blue-500 transition-all duration-300 hover:underline"
        >
          Articles
        </NavLink>
        <NavLink
          to="/images"
          className="text-xl font-semibold text-gray-300 hover:text-blue-500 transition-all duration-300 hover:underline"
        >
          Images
        </NavLink>
        <NavLink
          to="/videos"
          className="text-xl font-semibold text-gray-300 hover:text-blue-500 transition-all duration-300 hover:underline"
        >
          Videos
        </NavLink>
        <NavLink
          to="/news"
          className="text-xl font-semibold text-gray-300 hover:text-blue-500 transition-all duration-300 hover:underline"
        >
          News
        </NavLink>
      </div>
    </>
  );
}

export default HomePage;
