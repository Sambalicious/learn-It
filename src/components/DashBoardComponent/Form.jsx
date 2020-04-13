import React, { useState,useEffect } from 'react';
import axios from 'axios';
import InputField from './InputField';
import Button from './Button';



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
                      .catch(Error => {
                        setImageError(Error)
                        console.log(imageError)
                      })                         
        },[image])

          
        const handleSubmit = (e) =>{
            e.preventDefault();
            
             const courseData = new FormData();

             courseData.append("title", title);
             courseData.append("description", description);
             courseData.append("author", author);
             courseData.append("image", imageUrl);
             courseData.append("video", video);
        }



        
  
    return ( 
        <div className="justify-center md:flex sm:items-center">
            <form onSubmit={handleSubmit} className="container px-4 md:w-full max-w-md">
  

        <InputField placeholder={"Principles of Web Development by samuel"} label={'Course Title'} value={title} type={'text'} onChange={handleTitle} />
          

          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline
              -full-name">
                Course Description
              </label>
           </div>
    <div className="md:w-2/3">
      <textarea className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-g
      ay-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500" id="inline-full-name"
       type="text" value={description} placeholder="Course Description" onChange={handleDescription}></textarea>
    </div>
  </div>

  <InputField label={'Upload video'}  onChange={handleVideo} type={'file'} accept={'video/mp4,video/x-m4v,video'}  />
  <InputField label={'Course Cover Image'}  onChange={handleImage} type={'file'} accept={'image/*'}  />
  <InputField label={'Author'} placeholder={'e.g Samuel Ayegbusi'}  onChange={handleAuthor} type={'text'}  />
  <Button onSubmit={handleSubmit} />
 
</form>
        </div>
     );
}
 
export default Form;