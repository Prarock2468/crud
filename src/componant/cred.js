import React, { useState } from 'react'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const Cred = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [data, setdata] = useState([]);


    const addData = () => {

        setdata([...data, { name, email }]);
        setName('');
        setEmail('')
    }

   
    const removeitem = (index) => {
        var arr = data;
         arr.splice(index, 1);
        setdata([...arr]);
    }
     

    return (
        <>
            <div className='header'>
                <h2>UseState Practice Project</h2>
            </div>

            <div className='form-box'>
                <Stack spacing={2} direction="row">
                    <TextField id="outlined-basic" value={name} onChange={(event) => setName(event.target.value)} label="Name" variant="outlined" />
                    <TextField id="outlined-basic" value={email} onChange={(event) => setEmail(event.target.value)} label="Email" variant="outlined" />
                    <Button variant="contained" onClick={addData}>Add</Button>
                </Stack>
            </div>
            <div className='data-box'>
                <div className='data-flex'>
                    <div>Name</div>
                    <div>Email</div>
                    <div>Remove</div>
                </div>
            </div>
            {
                data.map((element, index) => { 
                    return (
                        <div  className='data-box'>
                            <div key={index} className='data-flex'>
                                <div>{element.name}</div>
                                <div>{element.email}</div>
                                <Button onClick={() => removeitem(index)} variant="contained" >Remove</Button>
                                {/* <Button  variant="contained" >Remove</Button> */}
                            </div>
                        </div>
                    )

                })
            }

        </>
    )
}

export default Cred