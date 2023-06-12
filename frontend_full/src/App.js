import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";
import Register from './Register';
import Login from "./Login";
import Aboutus from "./Aboutus";
import Abt from "./Abt";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Aboutus />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/edituser/:id" element={<EditUser />} />
          <Route path="/viewuser/:id" element={<ViewUser />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/pages/Home" element={<Home/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Aboutus" element={<Aboutus/>} />
          <Route path="/Abt" element={<Abt/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
