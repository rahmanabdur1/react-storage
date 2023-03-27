import React from 'react';
import { addToDb, removeFrom } from '../../utilities/calculate';
import './Cosmetic.css'
const Cosmetics = (props) => {
    const {name,id,price}=props.cosmatic;


    const addToCart=(id)=>{
      addToDb(id)
    }

    const removeFormetCart=id=>{
        removeFrom(id)
    }
    return (
        <div className='product'>
            <h2>Buy this:{name}</h2>
            <p>Only for: ${price}</p>
            <p>It has id: {id}</p>
            <button onClick={()=>addToCart(id)}>Add to cart</button>
           <button onClick={()=>removeFormetCart(id)}>Remove</button>
        </div>
    );
};

export default Cosmetics;