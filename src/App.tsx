import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ProjectDetails from "./components/ProjectDetails";

function App() {
  return (
    <Router>
      <main className="font-bodyFont w-full h-auto bg-bodyColor text-lightText">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

