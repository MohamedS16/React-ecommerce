import axios from 'axios'
import React,{useContext,useEffect,useState} from 'react'
import { CartContext } from '../components/CartContext'
import './css/cart.css'


export const Cart = () => {

  const [prod,setprod] = useState([])
  const {cartItems,RemoveFromCart,Deleteitem} = useContext(CartContext)

  useEffect(()=>{

    axios.get('https://fakestoreapi.com/products')
    .then(resp=>setprod(resp.data))
    .catch(err=>console.log(err))
  })
  return (
    <>
      <div className='cartitems'>
        <h1 className='title'>Your Cart</h1>
        <div className='cartitems-content'>
        {prod.map((post)=>{
          if(cartItems[post.id]>0){
            return( 
              <div key={post.id} className='cart-item'>
                <img src={post.image} />
                  <h2>{post.title}</h2>
                  <p className='price'>Price : {post.price}$</p>
                  <p> In Cart : {cartItems[post.id]}</p>
                  <div>
                    <button onClick={()=>RemoveFromCart(post.id)}>Remove 1</button>
                    <button onClick={()=>Deleteitem(post.id)}>Delete Item</button>
                    <p>Total Price : {post.price*cartItems[post.id]}$</p>
                  </div>
              </div>
            )}})}
        </div>
      </div>
    </>
  )
}
