import React from 'react';
import Cosmetics from '../Cosmetic/Cosmetics';

const Cosmatics = () => {

    const cosmatics =[
        {
          "_id": "6414faae2f14080a415b30d5",
          "price": 282,

          "name": "Flores Lawrence"
        },
        {
          "_id": "6414faae350bc18de504d988",
          "price": 547,
          "name": "Alma Jensen"
        },
        {
          "_id": "6414faae4771dbf39c9c5d01",
          "price": 196,
          "name": "Crystal Mooney"
        },
        {
          "_id": "6414faae220b036fcbbbfaee",
          "price": 328,
          "name": "Marlene Glover"
        },
        {
          "_id": "6414faae82ffa879bbb58ec7",
          "price": 473,
          "name": "Sheryl Russo"
        },
        {
          "_id": "6414faae7a83614776bbbcf2",
          "price": 61,
          "name": "Janette Barrett"
        }
      ]
    return (
        <div>
            <h1> Welcome to my cosmetics</h1>
            {
                cosmatics.map((cosmatic=><Cosmetics
                key={cosmatic.id}
                cosmatic={cosmatic}
                ></Cosmetics>))
            }
            
        </div>
    );
};

export default Cosmatics;