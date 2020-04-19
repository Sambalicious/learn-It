import React from 'react';

const CourseCard = ({label}) => {
    return ( 
        <div>
             <div class="max-w-sm rounded h-56 overflow-hidden shadow-xl hover:bg-blue-600 hover:text-white">
                <div className="my-4 text-center ">icon </div>
            <div class="px-6 py-4">
                <div class="font-bold text-bold mb-2 text-center">{label} </div>
                
            </div>
            </div>
        </div>
     );
}
 
export default CourseCard;