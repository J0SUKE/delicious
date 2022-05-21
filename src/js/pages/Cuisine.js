import React, { useEffect, useState } from 'react'
import {motion} from "framer-motion";
import { Link,useParams } from 'react-router-dom'; 

function Cuisine() {

    const [cuisine,setCuisine] = useState([]);
    const params = useParams();

    const getCuisine = (name)=>{
        fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=87fa3139bfef48f3b13f1d02beb5f0ee&number=9&cuisine=${name}`)
        .then(resp=>resp.json())
        .then(data=>{
          setCuisine(data.results)
        })
    }

    useEffect(()=>{
      getCuisine(params.type);
    },[params.type]);
    
    
    
    return (
    <div className='cuisine-grid'>
      {
        cuisine.map(item=>{
          return(
            <div className="card" key={item.id}>
                <img src={item.image} alt="" />
                <h4>{item.title}</h4>
            </div>
          )
        })
      }
    </div>
  )
}

export default Cuisine