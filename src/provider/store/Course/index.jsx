import {useReducer} from 'react';
import axios from 'axios';
import { toast} from  'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import courseReducer, { initialCourseState } from '../../reducers/Course'
import { 
    ADD_CONTENT, GET_COURSE, GET_AUTHOR, 
    COUNT_STARS, GET_USER_COURSES,
     GET_FAVOURITES, DELETE_COURSE, ADD_RATING 
    } from '../../actions';

toast.configure();
export default () => {
    const [state, dispatch] = useReducer(courseReducer, initialCourseState);

    const ENDPOINT = 'https://app-server20.herokuapp.com';
    const handleAddCourse = data => dispatch({type:ADD_CONTENT, payload: data })
    const handleAuthorGet = id => dispatch({type: GET_AUTHOR, payload:id});
    const handleStarRating = id => dispatch({type:ADD_RATING, payload: id})
    const handleGetUserCourses = data =>dispatch({type:GET_USER_COURSES, payload:data});
    const handleGetFavCourses = data => dispatch({type:GET_FAVOURITES, payload:data});
    const handleDeleteCourse = id =>dispatch({type:DELETE_COURSE, payload:id});
    const handleGetCourse = data =>dispatch({type:GET_COURSE, payload:data});


    const checkFavCourse = async (user_id, course_id) => {
        try {
          const checkUsers = await axios.get(
            `${ENDPOINT}/favourites?id=${course_id}`
          );
          
          if (checkUsers.data[0].users.includes(user_id)) {
            console.log('already added')
          } else {
            console.log('not yet added')
          }
        } catch (error) {
          toast.error('something went wrong. please try again')
          console.log(error)
        }
      };



    const getCourse = async (id) => {
        try {
          
          const response = await axios.get(`${ENDPOINT}/courses/${id}`);
    
          getAuthor(response.data.user_id);
    
          checkFavCourse(parseInt(localStorage.getItem("user_id")), parseInt(id));
    
          handleStarRating(response.data.id);
          handleGetCourse(response.data)
        } catch (error) {
            toast.error('something went wrong. please try again')
            console.log(error)
          }
        }
    
      

   
       const getAuthor =async (id) =>{
            try{
                const response = await axios.get(`${ENDPOINT}/users/${id}`);
                handleAuthorGet(response.data)

            }catch(e){
                toast.error('something went wrong, please try again')
            }
        }

        const getUserCourse = async (id) =>{
            try{
                const response = await axios.get(`${ENDPOINT}/courses?user_id=${id}`);

                handleGetUserCourses(response.data);


            }catch(e){
                toast.error('something went wrong, please try again')
            }

        }

        const addCourseToFav = async (user_id, course_id) =>{
            try{
                const course =  await axios.get(`${ENDPOINT}/favourites?id=${course_id}`);
                const users = course.data[0].users;
               const id = course.data[0].id;
          
                const updateData = {
                  users: [...users, user_id],
                  };
                  
                  await axios.put(`${ENDPOINT}/favourites/${id}`, updateData, {
                    headers: {
                      "Content-Type": "application/json",
                    },
                  });

                  checkFavCourse(user_id, course_id);

                  toast.success('course has been added to favourites')
            }catch(e){
                toast.error('something went wrong, please try again')
                console.log(e)
            }
            
        }

        const removeFavourite =  async(user_id, course_id) =>{
            try {
                const course = await axios.get(`${ENDPOINT}/favourites?id=${course_id}`);
                const users = course.data[0].users;
                const id = course.data[0].id;
          
                const newUsers = users.filter((userId) => userId !== user_id);
                const updateData = {
                  users: newUsers,
                };
                await axios.put(`${ENDPOINT}/favourites/${id}`, updateData, {
                  headers: {
                    "Content-Type": "application/json",
                  },
                });
                checkFavCourse(user_id, course_id);
                toast.success('course has been removed from favourites')
               
              } catch (error) {
                toast.error('something went wrong, please try again')
              }
        }

        const getUserFavourites = async (id) => {
            try {
              
              const userFavourites = await axios.get(`${ENDPOINT}/favourites`);
              const courseIds = [];
              const getCourses = async (id) => {
                const res = await axios.get(`${ENDPOINT}/courses?id=${id}`);
                courseIds.push(res.data[0]);
                handleGetFavCourses(courseIds)
              };
              await userFavourites.data.map((data) => {
                if (data.users.includes(parseInt(id))) {
                  getCourses(data.id);
                }
              });
            } catch (error) {
                toast.error('something went wrong, please try again')
            }
          };

         /////Rate course
  const rateCourse = async (user_id, course_id) => {
    try {
      const course = await axios.get(`${ENDPOINT}/stars?id=${course_id}`);
      const users = course.data[0].users;
      const id = course.data[0].id;
      const updateData = {
        users: [...users, user_id],
      };

      await axios.put(`${ENDPOINT}/stars/${id}`, updateData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      handleStarRating(course_id);
    } catch (error) {
        toast.error('something went wrong, please try again')
    }
  };

  const deleteCourse = async (id) => {
    try {
      await axios.delete(`${ENDPOINT}/courses/${id}`);

      const response = await axios.get(`${ENDPOINT}/stars?id=${id}`);

      await axios.delete(`${ENDPOINT}/stars/${response.data[0].id}`);

      await axios.delete(`${ENDPOINT}/favourites/${response.data[0].id}`);

      handleDeleteCourse(id)
      
      toast.success('course has been deleted')
    } catch (error) {
        toast.error('something went wrong, please try again')
    }




}



    

    return {
        ...state,
        handleAddCourse,
        getCourse,
        getUserFavourites,
        removeFavourite,
        getAuthor,
        deleteCourse,
        rateCourse,
        getUserCourse,
        addCourseToFav
    }
}