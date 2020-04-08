import React, { useState } from 'react';



const Form = () => {
        const [title, setTitle]= useState('');
        const [description, setDescription] = useState('');
        const [url, setUrl] = useState('');
        const [thumbnail,setThumbnail] =useState('')

  
    return ( 
        <div className="justify-center md:flex sm:items-center">
            <form class="container px-4 md:w-full md:max-w-sm">
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
        Course Title
      </label>
    </div>
    <div class="md:w-2/3">
      <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500" id="inline-full-name" type="text" value={title} placeholder="Principles of Web Development by samuel" onChange={e=>setTitle(e.target.value)} />
    </div>
  </div>

  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
        Course Description
      </label>
    </div>
    <div class="md:w-2/3">
      <textarea class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500" id="inline-full-name" type="text" value={description} onChange={e=>setDescription(e.target.value)}></textarea>
    </div>
  </div>

  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
        Course Link
      </label>
    </div>
    <div class="md:w-2/3">
      <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500" id="inline-full-name" type="url" placeholder="www.youtube.com/videourl" value={url} onChange={e=>setUrl(e.target.value)} />
    </div>
  </div>

  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
        Course Thumbnail Url
      </label>
    </div>
    <div class="md:w-2/3">
      <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500" id="inline-full-name" placeholder="www.youtube.com/videourl" type="url" value={thumbnail} onChange={e=>setThumbnail(e.target.value)} />
    </div>
  </div>
  
  
  <div class="md:flex md:items-center">
    <div class="md:w-1/3"></div>
    <div class="md:w-2/3">
      <button class="shadow bg-indigo-500 mb-12 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
        Add Content
      </button>
    </div>
  </div>
</form>
        </div>
     );
}
 
export default Form;