import React from 'react'


const Button = ({onSubmit, label}) => {
    
    return ( 
        <div className="justify-center md:flex">
           <div >
               <button className="px-4 py-2 mb-6 font-bold text-white bg-indigo-500 rounded shadow hover:bg-indigo-400 focus:shadow-outline focus:outline-none" type="button" onClick={onSubmit}>
                  {label}
               </button>
          </div>
       </div>
     );
}
 
export default  Button;