import React, { useState,useEffect} from 'react'
import palms from '../../utils/img/palms.png'
import OfferComponent from './OfferComponent'
import axios from 'axios';
import Courses from '../CoursesComponent/Courses';

const Offers = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [contents, setContents ] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:3004/courses')
        .then(response=>{
            setLoading(false);
            setContents(response.data);
            setError('');  
            
        }).catch(error=>{

            setLoading(false);
            setContents([]);
            setError(error.message, 'Ooops! something went wrong');
            
        })
    }, [])

    console.log(contents)
    return ( 
            <div className=" text-center mb-4 bg-purple-100">
            <div className="text-black text-center text-xl font-bold py-6 ">Available Courses</div>
        
                <div className="md:grid grid-cols-3 grid-rows-2 gap-4 ">
                
                {Array.isArray(contents) && contents ? contents.map((content) => <OfferComponent content={content.title} pics={palms} author={content.author} description={content.description} key={content.id} />): null }
                                                                  
            </div>
            </div>
     );
     
}
 
export default Offers;