import React from 'react'
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import { useParams } from 'react-router-dom';
function Uptade() {
  useEffect(() => {
    datalars()
  }, [])

  const [mydata, setmydata] = useState(null)

  const { id } = useParams()


  async function getAllproducts() {
    const res = await fetch("http://localhost:3000/products/"+id)
    const data = await res.json()
    return data
  }


  async function datalars() {
    const datalar = await getAllproducts(id)
    setmydata(datalar)
  }



  return (
    <>


      <Helmet>
        <title>Page</title>
        <link rel="canonical" href="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg" />
      </Helmet>


{mydata &&
      <Formik
        initialValues={{ date: mydata.date, text: mydata.text }}
        validationSchema={Yup.object({
          date: Yup.string()
            .required('Required'),
          text: Yup.number()
            .required('Required'),
 
        })}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values)
          setTimeout(() => {

            fetch("http://localhost:3000/products/" + id, {
              method: "put",
              headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
              }, body: JSON.stringify({ date: values.date, text: values.text}),
            });

            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <label htmlFor="date">Date</label>
          <Field name="date" type="text" />
          <ErrorMessage name="date" />

          <label htmlFor="text">Text</label>
          <Field name="text" type="text" />
          <ErrorMessage name="text" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>

}






    </>
  )
}

export default Uptade