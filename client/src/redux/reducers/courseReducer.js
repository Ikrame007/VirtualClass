import { GET_ALL_COURSES, SELECT_COURSE, REMOVE_SELECTED_COURSE, FILTER_COURSES, FILTER_COURSES_BY_DIFFICULTY,FILTER_COURSES_BY_PRICE, FILTER_COURSES_BY_TIME } from '../actions/types';


const initialState = {
    /* courses: [{
        id: 1,
        name: 'React.js',
        instructor: 'Jean Guillaume',
        price: '25.00$',
        thumb: '',
        description:'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de limprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.',
        category: 'Web Develeopment',
        rate: {
            rate : 5,
            notes : 202
        },
        difficulty: 'easy',
        time: 'long'

    },
    {
        id: 2,
        name: 'React.js',
        instructor: 'Jean Guillaume',
        description:'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de limprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.',

        price: 'free',
        thumb: '',
        category: 'Web Develeopment',
        rate: {
            rate : 5,
            notes : 230
        },
        difficulty: 'easy',
        time: 'short'

    },
    {
        id: 3,
        name: 'React.js',
        description:'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de limprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.',
        instructor: 'Jean Guillaume',
        price: 'free',
        thumb: '',
        category: 'Web Develeopment',
        rate: {
            rate : 5,
            notes : 331
        },
        difficulty: 'hard',
        time: 'long'

    },
    {
        id: 4,
        name: 'React.js',
        description:'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de limprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.',
        instructor: 'Jean Guillaume',
        price: 'free',
        thumb: '',
        category: 'Web Develeopment',
        rate: {
            rate : 3,
            notes : 101
        },
        difficulty: 'hard',
        time: 'short'

    },
    {
        id: 5,
        name: 'React.js',
        description:'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de limprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.',
        instructor: 'Jean Guillaume',
        price: '12,00$',
        thumb: '',
        category: 'Web Develeopment',
        rate: {
            rate : 3.5,
            notes : 153
        },
        difficulty: 'normal',
        time: 'short'

    }], */
    topCourses: [],
    freeCourses: [],
    filteredCourses: [],
    filter: '',
    difficulty: '',
    price:'',
    time: '',
    hidden: false,
    courses: [],
    selectedCourse: {}


}


export const courseReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_COURSES:
            return { ...state, courses: payload };
        case SELECT_COURSE:
            return { ...state, selectedCourse: payload };
        case REMOVE_SELECTED_COURSE:
            return { };
        case FILTER_COURSES:
            return { ...state, filteredCourses: payload.filteredCourses, filter: payload.filter, hidden:payload.hidden };
        case FILTER_COURSES_BY_DIFFICULTY:
            return { ...state, filteredCourses: payload.filteredCourses, difficulty: payload.difficulty, hidden:payload.hidden  };
        case FILTER_COURSES_BY_PRICE:
            return { ...state, filteredCourses: payload.filteredCourses, price: payload.price, hidden:payload.hidden  };
        case FILTER_COURSES_BY_TIME:
            return { ...state, filteredCourses: payload.filteredCourses, time: payload.time, hidden:payload.hidden  };
        default:
            return state;
    }
}



