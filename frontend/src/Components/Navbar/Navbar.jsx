import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'


export default function Navbar() {

    const [line, setLiner]= useState("shop");
const [getTotalCartItems]= useState(ShopContext);
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>Boutique</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setLiner("shop")}}> <Link className='link' style={{textDecoration:'none'}} to='/' >Shop</Link> {line==="shop"?<hr/>:<></>} </li>
        <li onClick={()=>{setLiner("men")}}> <Link className='link' to='/men' > Men </Link>{line==="men"?<hr/>:<></>}</li>
        <li onClick={()=>{setLiner("women")}}> <Link className='link' to='/women'> Women </Link> {line==="women"?<hr/>:<></>}</li>
        <li onClick={()=>{setLiner("kids")}}><Link className='link' to='/kids'> Kids</Link> {line==="kids"?<hr/>:<></>} </li>
      </ul>
      <div className="nav-login-cart">
         <button> <Link className='link' to='/login' > Login</Link> </button>
        <Link className='link' to='/cart' > <img src={cart_icon} alt="" /> </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}
