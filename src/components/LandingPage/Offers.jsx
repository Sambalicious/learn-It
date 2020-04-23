import React, { useState,useEffect} from 'react';
import OfferComponent from './OfferComponent'
import axios from 'axios';
import NetworkError from '../OtherPages/NetworkError';


const Offers = ({label}) => {
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

            <div className="mb-4 text-center">
                <div className="py-6 text-xl font-bold text-center text-black bg-pink-100 ">{label} </div>
                
                    {loading ? <div className='flex justify-center my-40 spinner'></div> : null}
                    {error ? <NetworkError />: null}
                    <div className="bg-purple-100 md:grid md:grid-cols-3 md:gap-4">
                    
                    {Array.isArray(contents) && contents ? contents.map((content) =>
                    <OfferComponent 
                            title={content.title}
                            coverImage={content.image}
                            author={content.author} 
                            description={content.description} 
                            video={content.VideoUrl}
                            key={content.id} 
                            id={content.id} 
                    />)
                   : error }
                                                                  
            </div>
            </div>
     );
     
}
 
export default Offers;