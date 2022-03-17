import React from 'react';

import imgtest2 from '../../../assets/images/react-js-training.jpg';
import CardCourse from '../../Card/CardCourse';

const List = ({courses}) => {
    return (
        <div className="row justify-content-around">
            {
                courses.map((course) => (
                    <div className="col-md-4">
                        <CardCourse
                            key={course.id}
                            thumb={imgtest2}
                            name={course.name}
                            instructor={course.instructor}
                            price={course.price}
                            rate={course.rate}
                            category='Development Web'
                        />
                    </div>
                ))
            }


        </div>
    );
};


export default List;