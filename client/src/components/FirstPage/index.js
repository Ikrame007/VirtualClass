import React, { useState } from "react";
import { connect } from 'react-redux';

// import { Routes ,Route } from 'react-router-dom';
import "./style.css" ;
import { BrowserRouter as Router, Switch, Route ,Link} from "react-router-dom";
import { setRole } from '../../redux/actions/authActions';


function FirstPage (props)  {

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
                  <Link to="/student/discover" onClick={() => props.dispatch(setRole('student'))} className="button">Discover As Student</Link>
                </div>
                <div className="split right">
            
                  <p className="text1">Publish a course</p>
                  <Link to="/professor/discover" onClick={() => props.dispatch(setRole('professor'))} className="button">Discover As Teacher</Link>
                </div>
              
        </div>
    
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  currentRole: state.auth.currentRole,
  courses: state.courses,

})
export default connect(mapStateToProps)(FirstPage);