import React from 'react';
import { Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';


import imgtest2 from '../../../assets/images/react-js-training.jpg';
import CardCourse from '../../Card/CardCourse';



const List = (props) => {
    return (
        <div className="row justify-content-around">
            {
                props.courses.map((course) => (
                    <div className="col-md-4">
                        <Link to={`/student/courses/${course._id}`} style={{ textDecoration: 'none'}}>
                        <CardCourse
                            key={course.id}
                            thumb={imgtest2}
                            id={course._id}
                            title={course.title}
                            instructor={course.instructor}
                            price={course.price}
                            rate={course.rate}
                            category={course.categories[0].categoryName}
                           
                        />
                        </Link>
                        
                    </div>
                ))
            }


        </div>
    );
};



export default List;
