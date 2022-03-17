import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';

import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer';


import Carousel from 'react-bootstrap/Carousel';
import CardCourse from '../../components/Card/CardCourse';
import NewCourse from '../../components/Courses/NewCourse/NewCourse';
import Selector from '../../components/Courses/Selector/Selector';
import List from '../../components/Courses/List/List';
import SearchBar from '../../components/SearchBar/SearchBar';

import '../../styles/student/Courses.scss';
import 'bootstrap/dist/css/bootstrap.css';
import imgtest1 from '../../assets/images/node-js-training-institute.jpg';
import imgtest2 from '../../assets/images/react-js-training.jpg';
import { filterCoursesByDifficulty } from '../../redux/actions/courseActions';
import { filterCoursesByPrice } from '../../redux/actions/courseActions';
import { filterCoursesByTime } from '../../redux/actions/courseActions';




const Courses = (props) => {


    const selectors = [
        {
            selector: 'difficulty',
            options: ['Easy', 'Normal', 'Hard']
        },
        {
            selector: 'price',
            options: ['Free', 'test', 'test']
        },
        {
            selector: 'time',
            options: ['Short', 'Long']


        }
    ]

    const freeCourses = props.courses.filter((course) =>
        course.price === 'free'
    ).slice(0, 3);
    const topCourses = props.courses.filter((course) =>
        course.rate.rate >= 4.5
    ).slice(0, 3);


    return (
        <div>
            <NavBar/>
            {/*  <Navigation/> */}
            <div className="container-fluid tops">
                {/* slider new courses */}
                <div className="row news" >
                    <Carousel>
                        {
                            props.courses.map((course) => (
                                <Carousel.Item interval={1500}>
                                    <NewCourse
                                        name={course.name}
                                        description={course.description}
                                        instructor={course.instructor}
                                        price={course.price}
                                        rate={course.rate}
                                        category='Development Web' />
                                </Carousel.Item>

                            ))
                        }
                    </Carousel>

                </div>
                <br />
                <br />

                {/* Filters + SearchBar */}
                <div className="container-fluid  list" >
                    <div className="row ">
                        <div className="col-md-7">
                            <div className="row justify-content-around">
                                <div className="col-md-3">
                                    <select
                                        value={props.difficulty}
                                        className="form-control"
                                        onChange={(e) => {
                                            props.dispatch(filterCoursesByDifficulty(props.courses, e.target.value))
                                        }}

                                    >
                                        <option value="">Difficulty</option>
                                        <option value="easy">Easy</option>
                                        <option value="normal">Normal</option>
                                        <option value="hard">Hard</option>

                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <select
                                        className="form-control"
                                        value={props.price}
                                        onChange={(e) => {
                                            props.dispatch(filterCoursesByPrice(props.courses, e.target.value))

                                        }}

                                    >
                                        <option value="">Price</option>
                                        <option value="free">Free</option>
                                        <option value="paid">Paid</option>

                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <select
                                        className="form-control"
                                        value={props.time}
                                        onChange={(e) => {
                                            props.dispatch(filterCoursesByTime(props.courses, e.target.value))
                                        }}

                                    >
                                        <option value="">Time</option>
                                        <option value="short">Short</option>
                                        <option value="long">Long</option>
                                       

                                    </select>
                                </div>
                            </div>
                            {/*  <div className="row justify-content-around">
                                {
                                    selectors.map((selector) => (
                                        <div className="col-md-3">
                                            <Selector
                                                
                                                key={selector.selector}
                                                selector={selector.selector}
                                                options={selector.options}
                                            />
                                        </div>
                                    ))
                                }
                            </div> */}
                        </div>
                        <div className="col-md-5">
                            <SearchBar courses={props.courses} filter={props.filter} />
                        </div>
                    </div>
                   

                </div>
            </div>
            <div className="container-fluid d-flex  justify-content-center list" >


                <div className="row rowcard ">
                    <List courses={props.filteredCourses} />


                </div>

            </div>

            <br /><br />

            <h1 className='section-title text-center'>{props.hidden ? '' : 'Top Courses Of The Week'}</h1>
            <div className="container-fluid d-flex  justify-content-center list" >
                <div className="row rowcard ">
                        <List courses={props.hidden ? [] : topCourses} />
                </div>
            </div>
            <br /><br />
            <h1 className='section-title text-center'>{props.hidden ? '' : 'Get Started with Free Courses'}</h1>
            <div className="container-fluid d-flex  justify-content-center list" >
                <div className="row rowcard ">
                    <List courses={props.hidden ? [] : freeCourses} />

                </div>
            </div>
            <Footer/>

        </div>



    );
};



const mapStateToProps = (state) => ({
    courses: state.courses.courses,
    filteredCourses: state.courses.filteredCourses,
    difficulty: state.courses.difficulty,
    price: state.courses.price,
    time: state.courses.time,
    hidden: state.courses.hidden,
})

export default connect(mapStateToProps)(Courses);