import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { filterCourses } from '../../redux/actions/courseActions';


const SearchBar = ( {filter, courses}) => {
    const dispatch = useDispatch();
    return (
        <div className='justify-content-center '>
        <input
            value={filter}
            onChange={(e) => {
               dispatch(filterCourses(courses, e.target.value));
               
            }}

            type="text" className="form-control" placeholder='Search...' />
    </div>
    );
};



export default SearchBar;