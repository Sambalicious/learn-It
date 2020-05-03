import React,{useState,useEffect, useContext} from 'react';
import { StoreContext } from '../../provider/store';
import axios from 'axios';
import { toast} from  'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactPlayer from 'react-player';
import NetworkError from '../OtherPages/NetworkError';
import StarRating from '../OtherPages/StarRating'
import Button from './Button';



toast.configure()
const DisplayCourses = (props) => {
    const id = (props.match.params.id)
    
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [contents, setContents ] = useState([]);

   const {favourites} = useContext(StoreContext);

   const {removeFavourite, handleFavourite} = favourites;

    useEffect(()=>{
       
        axios.get(`https://app-server20.herokuapp.com/courses/${id}`)
        .then(response=>{
            setLoading(false);
            setContents(response.data);
            setError('');  
        }).catch(error=>{

            setLoading(false);
            setContents([]);
            setError(error.message, 'Ooops! something went wrong');
            
        })
    }, [id]);

    const favouriteData = {
        users:[]
    }

    const addToFavourite = ()  =>{
            handleFavourite()
            toast.success('Course has been added to your dashboard')
            console.log(id)
            axios.post('https://app-server20.herokuapp.com/favourites', favouriteData,  {
                headers: {
                  "Content-Type": "application/json",
                },
              }).then(response =>{
                  console.log(response)
              }).catch(e=> console.log(e));
            
    }
    return ( 
        <div className="mx-2">     
                {loading ? <div className='flex justify-center my-40 spinner'></div> : null}
                {error ? <NetworkError /> : null}
              <div className="mt-6 mb-4 text-xl font-bold text-center text-purple-900">{contents.title} </div>
            <div className="flex justify-center mb-4">
                    <ReactPlayer 
                    width="720px"
                     height="400px" 
                     controls
                     url={contents.video} />
            </div>

            <div>
            <h3 className="flex justify-center font-sans text-lg text-purple-500 text-ceter">Course Description</h3>
                <p className="mx-10 text-black"> {contents.description} </p>
            <p className="flex justify-center mb-4 text-base text-purple-700">Author: {contents.author} </p>
            </div>
            
            <div className="flex justify-center mx-auto mb-4">
            <span className="m-4">Rate This Course: <StarRating /></span>
            </div>
            
            <div className="flex justify-center">
                <Button label={'Add To Favourites'} onSubmit={addToFavourite} />
            </div>
        </div>
     );
}
 
export default DisplayCourses;