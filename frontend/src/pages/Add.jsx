import React from 'react'
import { Helmet } from 'react-helmet-async';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'
function Add() {
    return (
        <>
            <Helmet>
                <title>Hello World</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>

    <Formik
       initialValues={{ date: '',text: ''}}
       validationSchema={Yup.object({
        date: Yup.number()
      
           .required('Required'),
           text: Yup.string()
           .required('Required'),
       })}
       onSubmit={(values, { setSubmitting }) => {
        console.log(values)
         setTimeout(() => {
          async function AddProducts() {
            const res = await fetch("http://localhost:3000/products", {
              method: "post",
              headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
              }, body: JSON.stringify(values),
            });
            const data = await res.json();
          }
           AddProducts();
           setSubmitting(false);
         }, 400);
       }}
     >
       <Form>
         <label htmlFor="date">date</label>
         <Field name="date" type="text" />
         <ErrorMessage name="date" />
 
         <label htmlFor="text">text</label>
         <Field name="text" type="text" />
         <ErrorMessage name="text" />

         <button type="submit">Submit</button>
       </Form>
     </Formik>
   </>
  )
}


export default Add