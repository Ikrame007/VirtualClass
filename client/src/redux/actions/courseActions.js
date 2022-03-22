import { COURSES_ERROR, GET_ALL_COURSES, SELECT_COURSE, REMOVE_SELECTED_COURSE, FILTER_COURSES, FILTER_COURSES_BY_DIFFICULTY, FILTER_COURSES_BY_PRICE, FILTER_COURSES_BY_TIME } from './types';
import axios from 'axios';


const priceFilter = (price, courses) => {
    if (price === 'free') {
        return courses.filter((course) =>
            course.price === 'free'
        )
    }
    else if (price === 'paid') {
        return courses.filter((course) =>
            course.price != 'free'
        )
    }

    return []

}
const timeFilter = (time, courses) => {
    if (time === 'short') {
        return courses.filter((course) =>
            course.time === 'short'
        )
    }
    else if (time === 'long') {
        return courses.filter((course) =>
            course.time === 'long'
        )
    }

    return [];

}

export const getAllCourses = () => async dispatch => {
    try{
        
        const res = await axios.get(`http://localhost:9090/courses-service/api/courses`)
        dispatch( {
            type: GET_ALL_COURSES,
            payload: res.data.courses
        })
    }
    catch(e){
        dispatch( {
            type: COURSES_ERROR,
            payload: console.log(e),
        })
        
    }
};



export const selectCourse = (course) => ({
    type: SELECT_COURSE,
    payload: course
});
export const removeSelectedCourse = () => ({
    type: REMOVE_SELECTED_COURSE,
   
});

export const filterCourses = (courses, filter) => (dispatch) => {
    dispatch({
        type: FILTER_COURSES,
        payload: {
            filter: filter,
            hidden: filter === "" ? false : true,
            filteredCourses: filter === "" ? [] : courses.filter((course) =>
                course.title
                    .toString()
                    .toLowerCase()
                    .includes(filter.toString().toLowerCase())
            )
        },
    });
};


export const filterCoursesByDifficulty = (courses, difficulty) => (dispatch) => {
    dispatch({
        type: FILTER_COURSES_BY_DIFFICULTY,
        payload: {
            difficulty: difficulty,
            hidden: difficulty === "" ? false : true,
            filteredCourses: difficulty === "" ? [] : courses.filter((course) =>
                course.difficulty === difficulty
            )
        },
    });
};


export const filterCoursesByPrice = (courses, price) => (dispatch) => {
    dispatch({
        type: FILTER_COURSES_BY_PRICE,
        payload: {
            price: price,
            hidden: price === "" ? false : true,
            filteredCourses: priceFilter(price, courses)

        },
    });
};
export const filterCoursesByTime = (courses, time) => (dispatch) => {
    dispatch({
        type: FILTER_COURSES_BY_TIME,
        payload: {
            time: time,
            hidden: time === "" ? false : true,
            filteredCourses: timeFilter(time, courses)
        },
    });
};