import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavScroll from "./components/NavScroll";
import MainPage from "./pages/MainPage";
import LabPage from "./pages/LabPage";
import NotebookPage from "./pages/NotebookPage";

function App() {
  return (
    <div className="App">
      <NavScroll />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/notebook" element={<NotebookPage />} />
          <Route path="/lab" element={<LabPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
