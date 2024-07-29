import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./router/Home";
import Detail from "./router/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:idd" element={<Detail />} />
        {/* :idd는 변수명임. useParams변수명이랑 일키시키기 */}
        <Route path="*" element={<h1>Not Found Page</h1> } />
      </Routes>
    </Router>   
  )
}
export default App;
