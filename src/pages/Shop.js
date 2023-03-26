import React,{useEffect,useState} from 'react'
import axios from 'axios'
import './css/shopp.css'
import {useNavigate } from 'react-router-dom'
import { Star } from 'phosphor-react'



export const Shop = () => {

  const [prod,setprod] = useState([])
  const navigate = useNavigate()

useEffect(()=>{

  axios.get('https://fakestoreapi.com/products/')
  .then(resp=>setprod(resp.data))
  .catch(err=>console.log(err))
})


  return (
    <div className='shop'>
      <div className='shop-content'>
        <div className='title'>
          <h1>Our Products</h1>
        </div>
        <div className='productss'>
          {
            prod.map(post=>{
              return(
                <div className='product' key={post.id} onClick={()=>navigate('/product/'+post.id)}>
                  <img src={post.image} />
                  <h2>{post.title}</h2>
                  <p className='price'>Price : {post.price}$</p>
                  <p className='rate'>Rating : {post.rating.rate} <Star size={15} /></p>
                </div>
              )
            })
          }
          </div>
      </div>
    </div>
  )
}
