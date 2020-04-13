import React from 'react';


const InputField = ({label,placeholder,title, onChange, type, accept}) => {
    return ( 
        <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor={label}>
            {label}
      </label>
    </div>
    <div className="md:w-2/3">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500" 
       type={type} value={title} placeholder={placeholder} onChange={onChange} accept={accept} />
    </div>
  </div>
     );
}
 
export default InputField;