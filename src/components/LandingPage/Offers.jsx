import React, { useState,useEffect} from 'react'
import palms from '../../utils/img/palms.png'
import OfferComponent from './OfferComponent'
import axios from 'axios';
import NetworkError from '../OtherPages/NetworkError';
import {useHistory} from 'react-router-dom';
const Offers = ({label}) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [contents, setContents ] = useState([]);
    const history = useHistory();

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
                <div className="py-6 text-xl font-bold text-center text-black ">{label} </div>
                
                    {loading ? <div className='h-48 my-48 overflow-hidden spinner'></div> : null}
                    {error ? <NetworkError />: null}
                    <div className="bg-purple-100 md:grid md:grid-cols-3 md:grid-rows-2 md:gap-4">
                    
                    {Array.isArray(contents) && contents ? contents.map((content) =>
                    <OfferComponent 
                            title={content.title}
                            coverImage={content.coverImage}
                            author={content.author} 
                            description={content.description} 
                            id={content.id} 
                    />)
                   : error }
                                                                  
            </div>
            </div>
     );
     
}
 
export default Offers;