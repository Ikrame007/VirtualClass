import React from 'react';
import imgtest1 from '../../../assets/images/node-js-training-institute.jpg';
/* import imgtest1 from '../assets/images/react-js-training.jpg'; */
import './NewCourse.scss'
import Rating from '../../Card/Rating';


const NewCourse = (course) => {
    return (
        <div className='row'>
            <div className="col-6 ">
                <img className='image' src={imgtest1} alt="New Course" />
            </div>
            <div className="col-6   new-details">
                <span className="btn btn-sm "><button className="btn-new ">New</button> </span><br /><br />
                <div className="text-start">
                    <h2 className="">{course.name} | {course.category}</h2>
                    <p className='desc '>{course.description}</p>
                    <p className="instructor desc">By {course.instructor}</p>
                    <Rating value={course.rate} /><br />
                    <h3 className=" ">{course.price} </h3><br />
                    <span className="right"><button className='btn-checked'>Check Course</button></span>
                </div>
            </div>
        </div>
    );
};

export default NewCourse;