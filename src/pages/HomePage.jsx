import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import Search from "../components/Search";

// Uncomment and use this image URL for a beautiful background
// const imgUrl ="https://images.pexels.com/photos/220072/pexels-photo-220072.jpeg?auto=compress&cs=tinysrgb&w=600";

function HomePage({ darkTheme, setDarkTheme }) {
  return (
    <>
      <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <Search />

      {/* Navigation Bar with a background image */}
      <div
        className={`flex justify-start items-center space-x-8 py-4 px-6 shadow-md mt-6 overflow-hidden specialFont 
          ${darkTheme ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-800'}`} 
        // Dynamically set background and text color based on darkTheme state
        // style={{
        //   backgroundImage: `url(${imgUrl})`,
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        // }}
      >
        <NavLink
          to="/articles"
          className="text-xl font-semibold hover:text-blue-500 transition-all duration-300 transform hover:scale-105 max-md:text-center cursor-pointer"
        >
          📝 Articles
        </NavLink>
        <NavLink
          to="/images"
          className="text-xl font-semibold hover:text-blue-500 transition-all duration-300 transform hover:scale-105 max-md:text-center cursor-pointer"
        >
          🖼️ Images
        </NavLink>
        <NavLink
          to="/videos"
          className="text-xl font-semibold hover:text-blue-500 transition-all duration-300 transform hover:scale-105 max-md:text-center cursor-pointer"
        >
          🎥 Videos
        </NavLink>
        <NavLink
          to="/news"
          className="text-xl font-semibold hover:text-blue-500 transition-all duration-300 transform hover:scale-105 max-md:text-center cursor-pointer"
        >
          📰 News
        </NavLink>
      </div>
    </>
  );
}

export default HomePage;
