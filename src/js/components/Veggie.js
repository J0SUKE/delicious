import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Splide,SplideSlide } from '@splidejs/react-splide';
import { Link } from 'react-router-dom';

import '@splidejs/react-splide/css';

function Veggie() {
  
  const[veggie,setVeggie] = useState([]);

  const getveggie = ()=>{
    
    const check = localStorage.getItem("veggie");
    if (check) {
      setVeggie(JSON.parse(check));
    }
    else
    {
      fetch(`https://api.spoonacular.com/recipes/random?apiKey=87fa3139bfef48f3b13f1d02beb5f0ee&number=9&tags=vegetarian`)
      .then(resp=>resp.json())
      .then(data=>{
        setVeggie(data.recipes)
        localStorage.setItem("veggie",JSON.stringify(data.recipes));
      })  
    }    
  }

  useEffect(()=>{
    getveggie();
  },[])
  
  
  return (
    <div>
      <Wrapper>
        <h3>veggie Picks</h3>
        <Splide options={{
          perPage:3,
          arrows:false,
          pagination:false,
          drag:"free",
          gap:"5rem"
        }}>
          {veggie.map((recipes)=>{
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

export default Veggie

const Wrapper = styled.div`
  margin: 4rem 0rem;
`

const Card = styled.div`
  min-height:15rem;
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