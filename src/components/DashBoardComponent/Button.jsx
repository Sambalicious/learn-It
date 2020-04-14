import React from 'react'


const Button = ({onSubmit, label}) => {
    
    return ( 
        <div className="md:flex justify-center">
       
        <div >
          <button className="shadow mb-6 bg-indigo-500 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button" onClick={onSubmit}>
            {label}
          </button>
        </div>
      </div>
     );
}
 
export default Button;