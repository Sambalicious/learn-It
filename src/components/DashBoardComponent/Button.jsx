import React from 'react'


const Button = ({onSubmit}) => {
    return ( 
        <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <button className="shadow mb-6 bg-indigo-500 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button" onSubmit={onSubmit}>
            Add Content
          </button>
        </div>
      </div>
     );
}
 
export default Button;