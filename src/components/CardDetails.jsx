import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import styles from '../Styles/card.module.css';
const CardDetails = () => {
    const [breedImg,setBreedImg] = useState([]);
    const {breedName} = useParams()
   
    useEffect(()=>{
        fetch(`https://dog.ceo/api/breed/${breedName}/images`)
        .then((response) => response.json())
        .then((data) => setBreedImg(data.message));
    },[]);

    console.log(breedImg);

  return (
    <div className={styles.cardimg}>
        {
          breedImg?.map((el,i)=>(
           
              <img src={el} alt="img"  key={i}/>
          ))  
        }

    </div>
  )
}

export default CardDetails