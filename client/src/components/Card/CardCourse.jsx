import React from "react";
import Rating from "./Rating";
import "./CardCourse.scss";

const List = (course) => {
  return (
    <div className="card ">
      <div className="overflow">
        <img src={course.thumb} alt="" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
      <span className="btn btn-sm btn-cursor"><button  className="btn-categorie ">{course.category}</button> </span><br />
        
        <div className="text-center text-body">
          <h4 className="card-title ">{course.name}</h4>
          <p className="instructor">By {course.instructor}</p>
          <Rating value={course.rate}/>
          <p className="btn btn-md "><button  className="btn-price ">{course.price}</button> </p><br />
          {/* <a href="#" className="btn btn-outline-secondary ">
            Check Course
          </a> */}
          <span ><button className='btn-checking'>Check Course</button></span>

        </div>
      </div>
    </div>
  );
};

export default List;
