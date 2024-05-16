import React from 'react'
import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Admin.scss'
function Admin() {
    const [mydata, setmydata] = useState([])
    useEffect(() => {
        getAllproduct()
    }, [])

    async function getAllproduct() {
        const res = await fetch('http://localhost:3000/products')
        const data = await res.json()
        setmydata(data)
    }



    async function handleDelete(id) {
        const res = await fetch('http://localhost:3000/products/' + id,
            {
                method: 'delete'
            }
        )
        const data = await res.json()
        return getAllproduct()
    }




    return (
        <>
            <Helmet>
                <title>Hello World</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>





            <h2>Admin Table</h2>
            {
                mydata.map((x) => {
                    return <>
                        <table>
                            <tr>
                                <th>Date</th>
                                <th>Text</th>
                                <th>Opinion</th>
                            </tr>
                            <tr>
                                <td>{x.date}</td>
                                <td>{x.text}</td>
                                <td>

                                    <button onClick={() => handleDelete(x._id)}>Delete</button>
                                    <Link to={`/uptade/${x._id}`}><button>Edit</button></Link>
                                    <Link to={`/detail/${x._id}`}><button >Detail</button></Link>
                                </td>
                            </tr>
                        </table>
                    </>
                })
            }
        </>





    )
}

export default Admin