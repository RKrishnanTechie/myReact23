import React from 'react'

const Navbar = ({filterMenu, menuList}) => {
  return (
    <>
    <nav className='navbar'>
    <div className='btn-group'>
    {
        menuList.map((currEl)=>{
            return ( 
             <button className='btn-group__item' onClick={() => filterMenu(currEl)}>{currEl}</button>
             
       ) })
    }
   
    
    </div>
    </nav>
    </>
  )
}

export default Navbar
