import React from 'react'


const Button = ({onSubmit, label, className}) => {
    
    return ( 
        <div className="justify-center md:flex">
           <div >
               <button className={className} type="button" onClick={onSubmit}>
                  {label}
               </button>
          </div>
       </div>
     );
}
 
export default  Button;