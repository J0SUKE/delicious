import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Search() {
 
    const[input,setInput] = useState("");
    const navigate = useNavigate();
    
    const submitHandler = (e)=>{
        
        e.preventDefault();
        navigate('/searched/'+input);
    }

 return (
    <form className='search' onSubmit={submitHandler}>
        <input type="text" value={input}
        onChange={(e)=>setInput(e.target.value)}/>
    </form>
  )
}

export default Search