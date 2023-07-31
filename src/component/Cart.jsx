import React from 'react'
import {useSelector} from "react-redux";
import {getItemsSelector} from '../redux/slice/cartSlice'
function Cart() {
  const items= useSelector(getItemsSelector);
  const total =items.reduce((a,b)=>a+b.price,0);
  
  return (
    <div className='alert alert-success'>
        <h3>Total items: {items.length} (Rs : {total} )/-</h3>
    </div>
  );
};

export default Cart