import {useReducer} from 'react'

import courseReducer, { initialCourseState } from '../../reducers/Course'
import { ADD_CONTENT, GET_COURSES, GET_AUTHOR, COUNT_STARS, GET_USER_COURSES } from '../../actions';


export default () => {
    const [state, dispatch] = useReducer(courseReducer, initialCourseState);

    const ENDPOINT = 'https://app-server20.herokuapp.com/';
    const handleAddCourse = data => dispatch({type:ADD_CONTENT, payload: data })
    const handleCourseGet = id => dispatch({type: GET_COURSES, payload: id});
    const handleAuthorGet = id => dispatch({type: GET_AUTHOR, payload:id});
    const handleStarGet = id => dispatch({type:COUNT_STARS, payload: id})
    const handleGetUserCourses = data =>dispatch({type:GET_USER_COURSES, payload:data});

    const getCourses =async (id) =>{

        try{
            const response = await axios.get(`${ENDPOINT}/courses/${id}`);


            getCourseAuthor(res.data.user_id);

            getFavCourse(parseInt(localStorage.getItem("user_id")), parseInt(id));

            getStars();


            StarCount(res.data.id);
            handleAddCourse(response.data)


        }catch(e){
            console.log(e)
        }

       const getAuthor = (id) =>{
            try{
                const response = await axios.get(`${ENDPOINT}/users/${id}`);



                handleAuthorGet(response.data)

            }catch(e){
                console.log(e)
            }
        }

        const getUserCourse = async (id) =>{
            try{
                const response = await axios.get(`${ENDPOINT}/courses?user_id=${id}`);

                handleGetUserCourses(response.data);


            }catch(e){
                console.log(e)
            }

        }

        const addCourseTofav = (user_id, course_id) =>{
            
        }


    }

    return {
        ...state,
        handleAddCourse,
        getCourses
    }
}