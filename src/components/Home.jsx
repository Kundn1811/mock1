import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "../Styles/home.module.css"

const Home = () => {
  const [puppyList,setPuppyList] = useState({});
  const navigate = useNavigate();


  useEffect(()=>{
      fetch('https://dog.ceo/api/breeds/list/all')
    .then((response) => response.json())
    .then((data) => setPuppyList(data.message));

  },[])
 
    
  return (
    <div className={styles.puppyContainer}>
       { Object.keys(puppyList)?.map((el,i)=>(
           <ul key={i} className={styles.puppyList} onClick={()=>{
               navigate(`/puppy/${el}`)
           }} >
               <h3>{el}</h3>
           </ul>

        ))}
    </div>
  )
}

export default Home