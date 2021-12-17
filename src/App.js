import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register/Register";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/social" element={<Home />} />
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
