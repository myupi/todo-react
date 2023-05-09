import "bootstrap/dist/css/bootstrap.min.css";
import { Tablet, PageAdd, PageEdit } from "./pages";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Tablet />} />
      <Route path="/addFeedback" element={<PageAdd />} />
      <Route path="/editFeedback" element={<PageEdit />} />
    </Routes>
  );
}

export default App;
