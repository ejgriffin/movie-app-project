import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favorites from "./pages/Favorites";
import Homepage from "./pages/Homepage";
import MovieDetails from "./pages/MovieDetails";

import "./App.css";

console.log(import.meta.env.VITE_API_BASE_URL);

function App() {
  return (
    <BrowserRouter>
      <header>HEADER</header>
      <Routes>
        <Route path={"/"} element={<Homepage />} />
        <Route path={"/favorites"} element={<Favorites />} />
        <Route path={"/details/"} element={<MovieDetails />} />
        <Route path={"*"} element={<Homepage />} />
      </Routes>
      <footer>FOOTER</footer>
    </BrowserRouter>
  );
}

export default App;
