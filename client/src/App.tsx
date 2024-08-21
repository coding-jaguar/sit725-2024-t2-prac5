import AddCatPage from "./components/AddCatPage";
import AllCatsPage from "./components/AllCatsPage";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="p-4">
          <Routes>
            <Route path="/" element={<AllCatsPage />} />

            <Route path="/add-cat" element={<AddCatPage />} />
          </Routes>
        </div>
      </Router>
      {/* <CatForm /> */}
    </>
  );
}

export default App;
