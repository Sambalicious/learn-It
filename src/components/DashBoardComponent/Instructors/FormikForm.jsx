import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const FormikForm =()=>{
    

     
        return ( 
            <Formik
                initialValues = {{
                //video: null,
                title:'',
                description:'',
               // image:null,
                author:''
              }}

              validationSchema = {Yup.object().shape({
               // video: Yup.mixed().required("You need to upload a video").test("fileSize", "The file size is too large :(", value => value && value.size <= 262144000),
                //image: Yup.mixed().required("You need to upload a a cover image").test("fileSize", "The file size is too large :(", value => value && value.size <= 102144000),
                title: Yup.string().required('Course Title is required'),
                description: Yup.string().required('Course Description is required'),
                author: Yup.string().required('Author Field is Required')
              })}

              onSubmit ={ values =>{
                console.log(values)
              }}

              render={({ errors, status, touched }) => (

                <Form>
            
               {/* <div className="mb-6 md:flex md:items-center">
                <div className="md:w-1/3">
                    <label className="block pr-4 mb-1 font-bold text-gray-500 md:text-right md:mb-0" htmlFor="video">
                          Course Video
                    </label>
                </div> 
                <div className="md:w-2/3">
                  <Field className={"w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-indigo-500" + (errors.video && touched.video) ? " is-invalid": ""}
                    type="file"  placeholder="course video"   />
                  <ErrorMessage name="video" component="div" className="text-xs italic text-red-500" />
                </div>
              </div> */}
  
  
              <div className="mb-6 md:flex md:items-center">
                <div className="md:w-1/3">
                    <label className="block pr-4 mb-1 font-bold text-gray-500 md:text-right md:mb-0" htmlFor="title">
                          Course Title
                    </label>
                </div>
                <div className="md:w-2/3">
                  <Field name="title" className={"shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" + (errors.author && touched.author ? " is-invalid": "")}
                    type="text"  placeholder="course title"    />
                  <ErrorMessage name="title" component="div" className="text-xs italic text-red-500" />
                </div>
              </div>
              
  
              <div className="mb-6 md:flex md:items-center">
                <div className="md:w-1/3">
                    <label className="block pr-4 mb-1 font-bold text-gray-500 md:text-right md:mb-0" htmlFor="description">
                          Course Description
                    </label>
                </div>
                <div className="md:w-2/3">
                  <Field name="description" className={"shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" + (errors.author && touched.author ? " is-invalid": "")}
                    type="text"  placeholder="course description"   />
                  <ErrorMessage name="description" component="div" className="text-xs italic text-red-500" />
                </div>
              </div>
  
               {/* <div className="mb-6 md:flex md:items-center">
                 <div className="md:w-1/3">
                     <label className="block pr-4 mb-1 font-bold text-gray-500 md:text-right md:mb-0" htmlFor="image">
                         Course Cover Image
                     </label>
                 </div>
                 <div className="md:w-2/3">
                   <Field className={"w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-indigo-500" + (errors.image && touched.image) ? " is-invalid": ""}
                     type="file"  placeholder="course cover image"   />
                   <ErrorMessage name="video" component="div" className="text-xs italic text-red-500" />
                 </div>
               </div> */}
  
  
              <div className="mb-6 md:flex md:items-center">
                <div className="md:w-1/3">
                    <label className="block pr-4 mb-1 font-bold text-gray-500 md:text-right md:mb-0" htmlFor="author">
                        Course Author
                    </label>
                </div>
                <div className="md:w-2/3">
                  <Field name="author" className={"shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" + (errors.author && touched.author ? " is-invalid": "")}
                    type="text"  placeholder="course authour"   />
                  <ErrorMessage name="author" component="div" className="text-xs italic text-red-500" />
                </div>
              </div>
            </Form>
                )}
            />
         );
    
}
 
export default FormikForm;