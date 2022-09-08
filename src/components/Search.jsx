import React from "react";
import { useState } from "react";
import styles from "../Styles/search.module.css";

const Search = () => {
   const [breedName,setBreedName] = useState("");
   const [breedImg,setBreedImg] = useState([]);
   const handleChange=(e)=>{
      setBreedName(e.target.value)
   }
   const handleClick=()=>{
    fetch(`https://dog.ceo/api/breed/${breedName}/images`)
    .then((response) => response.json())
    .then((data) => setBreedImg(data.message));
   }

   if(breedImg=='Breed not found (master breed does not exist)'){
    return <h3 style={{margin:"5rem"}}>Enter Breed Name again</h3>
  }
  return (
    <div>
      <div className={styles.searchSec}>
        <input type="text" onChange={handleChange} value={breedName}  placeholder='Enter breed name' />
        <button onClick={handleClick}>Search</button>
      </div>
      <div className={styles.cardimg}>
        {
          breedImg?.map((el,i)=>(
           
              <img src={el} alt="img"  key={i}/>
          ))  
        }

    </div>

    </div>
  );
};

export default Search;
