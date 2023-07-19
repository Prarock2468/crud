import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';

const Field = () => {

    const [count, setdata] = useState(5);
    const [arr, employee] = useState ([]);
    useEffect(() => {
        // window.alert("useEffect Called");
        async function getdata() {
            const data = await fetch(`https://hub.dummyapis.com/employee?noofRecords=${count}&idStarts=1001`);
            const res = await data.json();
            employee(res);
            console.log(res);

        }
        getdata();
    }, [count])

    return (
        <>
            <Button onClick={() => setdata(count + 5)}>Click Me {count}</Button>
            <Button onClick={() => setdata(count - 5)}>Click Me {count}</Button>

            {
                arr.map((element, index)=> {
                   return(
                    <div key={index } className='data'>
                        <h2>{element.id}</h2>
                         <h4>   {element.firstName} </h4>
                         <h4>   {element.lastName} </h4>
                         <h4>   {element.email} </h4>

                    </div>
                   )
                })
            }
        </>
    )
}

export default Field