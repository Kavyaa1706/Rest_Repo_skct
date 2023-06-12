import React from "react";
import "./Aboutus.css";
import img from './cart.jpg';
import img1 from './earth.png';
import { Link } from "react-router-dom";

class Aboutus extends React.Component{
    render(){
        return(
<div>
    <div>
        <img className="imag" src={img}></img>
    </div>
    <div>
        <b>
            <i>
                <h1 className="welc">WELCOME TO FLY AWAY..!</h1>
            </i>
        </b>
    </div>
    <div>
    <img className="imag1" src={img1}></img>
    </div>
    <div>
        <i>
            <h3 className="takeoff">Let your dreams take flight..!!</h3>
        </i>
    </div>
    <div>
        <Link to='/Register'><button className="get"><i>Get your Flights -></i></button></Link>

    </div>
</div>
        )
    }
}
export default Aboutus