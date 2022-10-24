import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import  { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logonav from "../../assets/shared/logo.svg";



const Home = () => {
  const l= 'background-image: url(https://blog.avivamiento.com/content/images/2019/09/cielos.jpg)'
  const initialFondo='blue'
  const [fondo, setfondo] = useState(initialFondo)
  const navigate = useNavigate()
  useEffect(() => {


  }, [])
  
  const changeFondo =(fond)=>{
    console.log('hi');
    if (fond=='fondo1') {
      console.log(initialFondo);
      setfondo('red')
      console.log('si');
      console.log(fondo);
      
    }
  }
  return (
    <>
    <div className='body' style={{backgroundColor:initialFondo}}> 
    <nav className="nav">
      <figure>
        {" "}
        <img src={logonav} />{" "}
      </figure>
      <section>
        <ul>
          <li>
            <button onClick={()=>{changeFondo('fondo1')}} to={'crew'}>Home

            </button>
          </li>
        </ul>
      </section>
    </nav>
   <Outlet/>
    </div>
    </>
  )
}

export default Home