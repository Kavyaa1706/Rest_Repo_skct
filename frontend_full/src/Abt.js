import React from "react";
import img from "./tra.jpg"
import "./Abt.css";
import img1 from "./fly1.png"
import img2 from "./image1.png";
import img3 from "./image2.png";
import img4 from "./image3.png";
import img5 from "./image4.png";


class Abt extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <img className="us" src={img}></img>
                </div>
                <div>
                    <h1 className="atu"><i>ABOUT US</i></h1>
                </div>
                <div>
                    <img className="wing" src={img1}></img>
                </div>
                <div>
                    <img className="wing1" src={img1}></img>
                </div>
                <div>
                    <p className="welcome"> 
                     Welcome to our flight ticket booking service! We are an online <br/>platform dedicated to providing convenient and efficient flight <br/>booking solutions to travelers around the world. Whether you're <br/>planning a business trip, a family vacation, or a spontaneous <br/>adventure, we are here to help you find the best flights to suit <br/>
your needs.
                    </p>
                </div><p className="welcome1">
                We prioritize customer satisfaction and strive to deliver excellent <br/>
service at all times. Our dedicated customer support team is <br/>available to assist you with any queries or concerns you may have<br/>
 before, during, or after your booking. We value your feedback and<br/>
 continuously work to improve our services based on customer<br/> suggestions and industry trends.
                </p>
                <div>

                </div>
                <div>
                    <img className="icon" src={img2}></img>
                </div>
                <div>
                    <img className="icon1" src={img3}></img>
                </div>
                <div>
                    <img className="icon2" src={img4}></img>
                </div>
                <div>
                    <img className="icon3" src={img5}></img>
                </div>
            </div>
        )
    }
}
export default Abt