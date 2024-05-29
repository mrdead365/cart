import React from "react";
import { useState } from "react";

export default function App() {
  let [products, setProducts] = useState([
    {
      id: 101,
      name: "Twister Combo",
      image:
        "https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-twister-combo-2023-05-31115706.png",
      des: "Twister + 1 Regular fries + 1 Regular drink",
      price: 400,
      qty: 0,
    },
    {
      id: 102,
      name: "Twister Combo1",
      image:
        "https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-twister-combo-2023-05-31115706.png",
      des: "Twister + 1 Regular fries + 1 Regular drink",
      price: 450,
      qty: 0,
    },
    {
      id: 103,
      name: "Twister Combo2",
      image:
        "https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-twister-combo-2023-05-31115706.png",
      des: "Twister + 1 Regular fries + 1 Regular drink",
      price: 500,
      qty: 0,
    },
    {
      id: 104,
      name: "Twister Combo3",
      image:
        "https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-twister-combo-2023-05-31115706.png",
      des: "Twister + 1 Regular fries + 1 Regular drink",
      price: 550,
      qty: 0,
    },
  ]);
  let [total , setTotal] = useState(0) 

  let increment = (index) => {
    console.log(index)
    let copyProducts = [...products];
    let product = copyProducts[index];
    product.qty++;

    let ptotal =total += copyProducts[index].price 
   setTotal(ptotal)
    setProducts(copyProducts);
  };


  let dcrement = (index) => {
    let copyProducts = [...products];
    let product = copyProducts[index];
    product.qty--;

    let ptotal =total -= copyProducts[index].price 
    setTotal(ptotal)
    setProducts(copyProducts);
   
  };

  let del = (index) => {
    let copyProducts = [...products];
    let product = copyProducts[index];

    let ptotal = total - (product.price * product.qty);
    setTotal(ptotal);

    copyProducts.splice(index, 1);
    setProducts(copyProducts);
  };


  return (
    <div className="container bg-warning">
      <h1> Bagtotal = {total}</h1> 

      <div className="row">
      {products.map((product, index) => (
					<div className="card col-lg-4 col-md-6 col-sm-12 col-12 my-2">
						<h2>ID = {product.id}</h2>
						<h2>Name = {product.name}</h2>
            <img src={product.image} alt="" />
            <h4>RS={product.price} </h4>
            <div className="card1">
              {product.qty <1 ? <span> <button className="inc" onClick={()=> increment(index)}> + </button>
            <span className="cont"> {product.qty } </span>
            </span> : <span><button className="inc" onClick={()=> increment(index)}> + </button>
            <span className="cont"> {product.qty } </span>
            <button className="dec" onClick={()=> dcrement(index)}> - </button></span>}

            <span><button onClick={()=> del(index)}>del</button></span>
            
          </div>
						
					</div>
				))}
      </div>
    </div>
  );
}

