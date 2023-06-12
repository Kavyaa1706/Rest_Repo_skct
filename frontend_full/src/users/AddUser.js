import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "./tick.jpg";
import img1 from "./location.jpg";
import img2 from "./home1.jpg";
import img3 from "./customer.png";
import "./AddUser.css";

export default function AddUser() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user", user);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 ">
          <h2 className="text-center m-4">Book Tickets</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                UserName
              </label>
              <input
                type={"text3"}
                className="form-control"
                placeholder="Enter your username"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                Boarding point
              </label>
              <input
                type={"text2"}
                className="form-control"
                placeholder="Enter your Boarding Point"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Destination
              </label>
              <input
                type={"text1"}
                className="form-control"
                placeholder="Enter your Destination"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            
            <button type="submit" className="btn1 ">
              Submit
            </button>
            <button className="btn3 btn-outline-danger ">
              
                Cancel
              
            </button>
          </form>
        </div>
      </div>
      <div>
        <img className="ticket" src={img}></img>
      </div>
      <div>
        <img className="ticket1" src={img1}></img>
      </div>
      <div>
        <Link to='/pages/Home'><img className="ticket2" src={img2}></img></Link>
      </div>
      <div>
        <img className="ticket3" src={img3}></img>
      </div>
    </div>
  );
}
