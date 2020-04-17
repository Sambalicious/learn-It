import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { toast} from  'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import InputField from './InputField';
import Button from './Button';


toast.configure()
const Form = () => {

        const [title, setTitle]= useState('');
        const [description, setDescription] = useState('');
        const [video, setVideo] = useState('');
        const [image,setImage] =useState('');
        const [author, setAuthor] = useState('');
        
    
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

        const [imageUrl, setImageUrl] = useState('');
        const [imageError, setImageError] = useState('');


        
        useEffect(()=>{            
          axios.post("https://api.imgur.com/3/image",image, {
                        headers:{
                          Authorization: "Client-ID db563de1e18b82b"
                        }
                      }).then(response=> {
                        setImageUrl(response.data.data.link);
                        console.log(response.data.data.link)})
                      .catch(error => {
                        setImageError(error)
                        console.log(imageError)
                       
                      })                         
        },[image]);

        const upload = response =>{
          console.log(response)
        }
         

       
          
        const handleSubmit = (e) =>{
            e.preventDefault();
            
            
             const courseData = new FormData();

             courseData.append("title", title);
             courseData.append("description", description);
             courseData.append("author", author);
             courseData.append("image", imageUrl);
             courseData.append("video", video);

             toast.success('You have succesfully created a content');
            
        }



        
  
    return ( 
        <div className="justify-center md:flex sm:items-center">
            <form onSubmit={handleSubmit} className="container max-w-md px-4 md:w-full">
  

        <InputField placeholder={"Principles of Web Development by samuel"} label={'Course Title'} value={title} type={'text'} onChange={handleTitle} />
          

          <div className="mb-6 md:flex md:items-center">
            <div className="md:w-1/3">
              <label className="block pr-4 mb-1 font-bold text-gray-500 md:text-right md:mb-0" htmlFor="inline
              -full-name">
                Course Description
              </label>
           </div>
    <div className="md:w-2/3">
      <textarea className="w-full px-4 py-2 leading-tight bg-gray-200 border-2 border-gray-200 rounded appearance-none text-g ay-700 focus:outline-none focus:bg-white focus:border-indigo-500" id="inline-full-name"
       type="text" value={description} placeholder="Course Description" onChange={handleDescription}></textarea>
    </div>
  </div>

  <InputField label={'Upload video'}  onChange={handleVideo} type={'file'} accept={'video/*'}  />
  <InputField label={'Course Cover Image'}  onChange={handleImage} type={'file'} accept={'image/*'}  />
  <InputField label={'Author'} placeholder={'e.g Samuel Ayegbusi'}  onChange={handleAuthor} type={'text'}  />
  <Button onSubmit={handleSubmit} label={'Add Content'} />
 
</form>
        </div>
     );
}
 
export default Form;