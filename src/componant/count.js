import React, { useState } from 'react'




const Count = () => {

const [num , Setnum] = useState(1);
const [des , setbtn] = useState(false);
function inc(){
     Setnum(num + 1);
    if(num > 0)
    {   
        setbtn(false);
    }
}
function dec(){
    Setnum(num - 1);
    console.log(num);
    if(num <= 1)
    {   
        setbtn(true);
    }
     
}

  return (
  
    <div className='count-box'>
          <div className='count-in'>
                <div className='count-num'>{num}</div>
                <div className='btn-box'>
                    
                        <button onClick={inc}>Increment</button>
                        <button disabled={des} onClick={dec}>Decrement</button>
                    
                </div>
          </div>
    </div>
  )
}

export default Count