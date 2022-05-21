import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Searched() {

    const [searchedRecipes,setSearchedRecipes] = useState([]);
    let params = useParams();

    const getSearched = (name)=>{
        fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=87fa3139bfef48f3b13f1d02beb5f0ee&number=9&query=${name}`)
        .then(resp=>resp.json())
        .then(data=>{
            setSearchedRecipes(data.results)
        })
    }
    useEffect(()=>{
        getSearched(params.search);
    },[params.search]);
  
  
    return (
    <div className='cuisine-grid'>
        {
            searchedRecipes.map((item)=>{
                <div className="card" key={item.id}>
                    <img src={item.image} alt="" />
                    <h4>{item.title}</h4>
                </div>
            })
        }
    </div>
  )
}

export default Searched