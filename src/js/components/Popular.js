import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Splide,SplideSlide } from '@splidejs/react-splide';
import { Link } from 'react-router-dom';

import '@splidejs/react-splide/css';


function Popular() {

  const[popular,setPopular] = useState([]);

  const getPopular = ()=>{
    
    const check = localStorage.getItem("popular");
    if (check) {
      setPopular(JSON.parse(check));
    }
    else
    {
      fetch(`https://api.spoonacular.com/recipes/random?apiKey=87fa3139bfef48f3b13f1d02beb5f0ee&number=9`)
      .then(resp=>resp.json())
      .then(data=>{
        setPopular(data.recipes)
        localStorage.setItem("popular",JSON.stringify(data.recipes));
      })  
    }

    
  }

  useEffect(()=>{
    getPopular();
  },[])


  return (
    <div>
      <Wrapper>
        <h3>Popular Picks</h3>
        <Splide options={{
          perPage:4,
          arrows:false,
          pagination:false,
          drag:"free",
          gap:"5rem"
        }}>
          {popular.map((recipes)=>{
            return(
              <SplideSlide key={recipes.id}>
                  <Card>
                    <Link to={'/recipe/'+recipes.id}>
                      <p>{recipes.title}</p>
                      <img src={recipes.image} alt={recipes.title} />
                    </Link>
                    
                  </Card>
              </SplideSlide>
            )
          })}
        </Splide>
      </Wrapper>

    </div>
  )
}


const Wrapper = styled.div`
  margin: 4rem 0rem;
`

const Card = styled.div`
  min-height:20rem;
  border-radius:2rem; 
  overflow:hidden;
  position:relative;
  img{
    position:absolute;
    left:0;
    height:100%;
    width:100%;
    object-fit:cover;
  }

  p{
    position:absolute;
    z-index:10;
    left:50%;
    top:50%:
    transform:translate(-50%,0%);
    color:white;
    width:100%;
    text-align:center;
    font-weight:600;
    height:40%;
    display:flex;
    justify-content:center;
    align-items:center;
  }
`

export default Popular