import React, { useState,useEffect} from 'react'
import palms from '../../utils/img/palms.png'
import OfferComponent from './OfferComponent'
import axios from 'axios';

const Offers = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [contents, setContents ] = useState([]);

    useEffect(()=>{
        axios.get('https://app-server20.herokuapp.com/courses')
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

    
    return ( 
            <div className="mb-4 text-center bg-purple-100 ">
            <div className="py-6 text-xl font-bold text-center text-black ">Available Courses</div>
        
                <div className=" md:grid md:grid-cols-3 md:grid-rows-2 md:gap-4">
                
                {Array.isArray(contents) && contents ? contents.map((content) =>
                 <OfferComponent 
                        title={content.title}
                        pics={palms}
                        author={content.author} 
                        description={content.description} 
                        key={content.id} 
                   />)
                   : 'Loading' }
                                                                  
            </div>
            </div>
     );
     
}
 
export default Offers;