import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/homepage/Home";
import Products from "./pages/admin/Products";
import Team from "./pages/homepage/Team";
import Contact from "./pages/homepage/Contact";
import About from "./pages/homepage/About";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Edit from "./pages/profile/Edit";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Register} />
          <Route path="/products" Component={Products} />
          <Route path="/team" Component={Team} />
          <Route path="/contact" Component={Contact} />
          <Route path="/about" Component={About} />
          <Route path="/home" Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/upload" Component={Edit} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
