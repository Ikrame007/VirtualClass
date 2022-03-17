import React, { useState } from "react";
// import { Routes ,Route } from 'react-router-dom';
import "./style.css" ;
import { BrowserRouter as Router, Switch, Route ,Link} from "react-router-dom";

function FirstPage ()  {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

    React.useEffect(() => {

        const left = document.querySelector(".left");
        const right = document.querySelector(".right");
        const container = document.querySelector(".App");
    
        left.addEventListener("mouseenter", () => {
            container.classList.add("hover-left");
        });
    
        left.addEventListener("mouseleave", () => {
            container.classList.remove("hover-left");
        });
    
        right.addEventListener("mouseenter", () => {
            container.classList.add("hover-right");
        });
    
        right.addEventListener("mouseleave", () => {
            container.classList.remove("hover-right");
        });
     }, []);
  
      return (
  
        <div className="App">
        
                <div className="split left">
                  <p  className="text1">Learn a course</p>
                  <Link to="/discoverstudent"   className="button">Discover As Student</Link>
                </div>
                <div className="split right">
            
                  <p className="text1">Publish a course</p>
                  <Link to="/discoverteacher"   className="button">Discover As Teacher</Link>
                </div>
              
        </div>
    
  )
}

export default FirstPage;