import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import Home from "./router/Home";
import Detail from "./router/Detail";

function App() {
  return (
    <>
      <Router>
        <ul className="navBar">
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/movie/:movie_id">Detail : Movie Description</NavLink>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:movie_id" element={<Detail />} />
          {/* :movie_id는 변수명임. useParams변수명이랑 일키시키기 */}
          <Route path="*" element={<h1>Not Found Page</h1>} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
