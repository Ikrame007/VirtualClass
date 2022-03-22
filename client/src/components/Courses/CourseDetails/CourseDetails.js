import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { removeSelectedCourse, selectCourse } from '../../../redux/actions/courseActions';


const CourseDetails = (props) => {
    const dispatch = useDispatch();
    const { courseId } = useParams();
    console.log(courseId);
    useEffect(() => {
        axios.get(`http://localhost:9090/courses-service/api/courses/${courseId}`)
            .then((res) => props.dispatch(selectCourse(res.data.course)))
            .catch(err => console.log(err));

    }, []);
    console.log(props.course);
    return (
        <div>
            <h1>{props.course.title}</h1>
            <h2>{props.course.price}</h2>
        </div>
    );
};


const mapStateToProps = (state) => ({
    course: state.courses.selectedCourse,

})
export default connect(mapStateToProps)(CourseDetails);