import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect,useContext } from 'react'
import axios from 'axios'
import './css/product.css'
import { CartContext } from '../components/CartContext'

export const Product = () => {

    const [prod,setprod] = useState({})
    const param = useParams()
    const {addToCart} = useContext(CartContext)

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products/'+param.id)
        .then(product=>setprod(product.data))
        .catch(err=>console.log(err))
    })

  return (
    <div className='product-item'>
        <div className='product-content'>
            <div className='product-title'>
                <h1>{prod.title}</h1>    
            </div>  
            <div className='product-details'>
                <div className='product-image'>
                    <img src={prod.image} />
                </div>
                <div className='product-text'>
                    <p><span>Description : </span> {prod.description}</p>
                    <p><span>Price : </span> {prod.price}</p>
                    <p><span>Category : </span> {prod.category}</p>
                    <button onClick={()=>addToCart(prod.id)}>Add To Cart</button>
                    {/* <p><span>Rating : </span>{prod.rating.rate} <Star size={15} /></p>
                    <p><span>Stock Left : </span>{prod.rating.count}</p> */}
                </div>
            </div>
        </div>
        
    </div>
)
}