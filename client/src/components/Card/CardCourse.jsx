import React from "react";
import { Link } from "react-router-dom";

import Rating from "./Rating";
import "./CardCourse.scss";

const CardCourse = (course) => {
  return (
    <div className="card ">
      <div className="overflow">
        <img src={course.thumb} alt="" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <span className="btn btn-sm btn-cursor">
          <button className="btn-categorie ">{course.category}</button>{" "}
        </span>
        <br />

        <div className="text-center text-body">
          <h4 className="card-title ">{course.title}</h4>
          <p className="instructor">
            By {course.instructor}
          </p>
          <Rating value={course.rate} />
          <p className="btn btn-md ">
            <button className="btn-price ">{course.price}</button>{" "}
          </p>
          <br />

          {/* <Link to={`/course/${course.id}`} style={{ textDecoration: "none" }}> */}
          <span>
            <button className="btn-checking">Check Course</button>
          </span>
          {/*   </Link> */}
        </div>
      </div>
    </div>
  );
};

export default CardCourse;
