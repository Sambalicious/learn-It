import React, { useState, useContext } from 'react';
import {GlobalContext} from '../../App';
import axios from 'axios';



const Form = () => {

      const {handleAddContent} = useContext(GlobalContext) ;
        const [title, setTitle]= useState('');
        const [description, setDescription] = useState('');
        const [video, setVideo] = useState('');
        const [image,setImage] =useState('');
        const [author, setAuthor] = useState('')
    
        const handleTitle = (e) => {
          setTitle(e.target.value)
        }

        const handleDescription = (e) => {
          setDescription(e.target.value)
        }

        const handleVideo = (e) =>{
          setVideo(e.target.files[0])
          
        }

        const handleImage = (e) => {
          setImage(e.target.files[0])
        }
        const handleAuthor = (e) =>{
          setAuthor(e.target.value)
        }

        const handleSubmit = (e) =>{
            e.preventDefault();
            
             const courseData = new FormData();

             courseData.append("title", title);
             courseData.append("description", description);
             courseData.append("author", author);
             courseData.append("image", image);
             courseData.append("video", video);

             axios.post('https://www.googleapis.com/upload/youtube/v3/videos', courseData)
             .then(response => console.log(response.data))




              {/**

             axios.post('http://localhost:3004/courses', courseData);
             axios.post('https://www.googleapis.com/upload/youtube/v3/videos', {
               file: courseData,
               token:this.accessToken
             })
               
              axios.post('https://www.googleapis.com/upload/youtube/v3/videos?key=[AIzaSyAzkRilV1frsYInHzR41Qq1SgZWxyqdYg8]',{
                Authorization: Bearer [642784607442-q1fl97dg1ulb5dvf125thfi01r5usbd4.apps.googleusercontent.com],
                Accept: application/json,
                Content-Type: application/json,
                file: courseData
              })


            
 */}





              }



        
  
    return ( 
        <div className="justify-center md:flex sm:items-center">
            <form onSubmit={handleSubmit} class="container px-4 md:w-full max-w-sm">
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
        Course Title
      </label>
    </div>
    <div class="md:w-2/3">
      <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500" id="inline-full-name" type="text" value={title} placeholder="Principles of Web Development by samuel" onChange={handleTitle} />
    </div>
  </div>

  

  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
        Course Description
      </label>
    </div>
    <div class="md:w-2/3">
      <textarea class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500" id="inline-full-name" type="text" value={description} placeholder="Course Description" onChange={handleDescription}></textarea>
    </div>
  </div>

  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
          Videos
      </label>
    </div>
    <div class="md:w-2/3">
      <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500" id="inline-full-name" accept="video/mp4" type="file" onChange={handleVideo} />
    </div>
  </div>

  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
        Cover Image
      </label>
    </div>
    <div class="md:w-2/3">
      <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500" id="inline-full-name"  type="file"  onChange={handleImage} />
    </div>
  </div>

  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
            Author
          </label>
        </div>
        <div class="md:w-2/3">
          <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500" id="inline-full-name" type="text" value={author} placeholder="e.g Samuel Ayegbusi" onChange={handleAuthor} />
        </div>
  </div>
  
  
  <div class="md:flex md:items-center">
    <div class="md:w-1/3"></div>
    <div class="md:w-2/3">
      <button class="shadow mb-6 bg-indigo-500 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button" onSubmit={handleSubmit}>
        Add Content
      </button>
    </div>
  </div>
</form>
        </div>
     );
}
 
export default Form;