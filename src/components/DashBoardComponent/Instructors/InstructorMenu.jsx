import React, { useState } from 'react'
import axios from 'axios';
import { toast} from  'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import InputField from '../InputField'
import Button from '../Button'


toast.configure()
const InstructorMenu = () => {

    const [bio, setBio] = useState('');
    const [profileImage, setProfileImage ] = useState('');

    const handleBio = (e)=>{
        setBio(e.target.value)
    }

    const handleProfile = (e)=>{
        setProfileImage(e.target.files[0])
    }

    const [imageUrl, setImageUrl] = useState('');
        const [error, setError] = useState('');
    const handleSubmit = (e) =>{
        e.preventDefault();

        const BioData = {
            bio, profileImage
        }
        
        toast.success('Your Biodata has been succesfully updated');

        

            axios.post("https://api.imgur.com/3/image", profileImage , {
                          headers:{
                            Authorization: "Client-ID db563de1e18b82b"
                          }
                        }).then(response=> {
                          setImageUrl(response.data.data.link);
                        })
                        .catch(error => {
                          console.log(error)
                         setError('Something went wrong')
                        })                      
    }

    return ( 
        <div className="md:flex justify-around">
            <div className="bg-red-700">
                <h3>Profile Information</h3>
                <form onSubmit={handleSubmit}>
            <InputField placeholder={"Add Biography"} 
                label={'Biography'}
                value={bio}
                type={'text'} 
                onChange={handleBio}
            />

             <InputField
                label={'Edit profile picture'} 
                onChange={handleProfile}
                type={'file'} 
                accept={'image/*'} 
            />
            <Button
                label={'Edit profile'}
                onSubmit={handleSubmit}
            />
        </form>
            </div>

            <div className="bg-purple-600">
                hello from two
            </div>

        </div>
     );
}
 
export default InstructorMenu;