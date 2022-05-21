import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Recipe() {
    
    let params = useParams();
    const [details,setDetails] = useState({});
    const[activeTab,setactiveTab] = useState("instructions");


    const fetchDetails = ()=>{
    
        fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=87fa3139bfef48f3b13f1d02beb5f0ee`)
          .then(resp=>resp.json())
          .then(data=>{
            setDetails(data)
          })     
      }

    useEffect(()=>{
        fetchDetails();
    },[params.id]);

    return (
    <>
        <div>
            <h2>{details.title}</h2>
            <img src={details.image} alt="" />
        </div>
        <div className="info">
            <button onClick={()=>setactiveTab("instructions")}>instructions</button>
            <button onClick={()=>setactiveTab("ingredients")}>ingredients</button>
        </div>
    </>
  )
}

export default Recipe