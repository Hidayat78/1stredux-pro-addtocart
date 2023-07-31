import React, { useEffect, useState } from 'react'
import products from './Products.json'
import "./App.css";
import Cart from './component/Cart';
import Product from './component/Product';
function App() {
  // const { productss } = products
  const [data, setData] = useState([])
  useEffect(() => {
    setData(products.product)
  }, [])
  return (
    <div >
      <Cart/>
      {Array.isArray(data) ? data.map((pro, i) => {
        return (
          <div key={i}>
           <Product props={pro}/>
          </div>
        )
      }) : <div>data is not arr</div>
    }
    </div>
  );
}

export default App