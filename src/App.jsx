import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Articles from "./components/Articles";
import Images from "./components/Images";
import News from "./components/News";
import Videos from "./components/Videos";
import Footer from "./components/Footer";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
        <HomePage darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Routes>
          {/* Redirect "/" to "/articles" */}
          <Route path="/" element={<Navigate to="/articles" />} />

          {/* Define specific routes for articles, images, videos, news */}
          <Route path="/articles" element={<Articles />} />
          <Route path="/images" element={<Images />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/news" element={<News />} />

          {/* Catch-all route for undefined paths */}
          <Route path="*" element={<h1>404 error: NOT FOUND</h1>} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
