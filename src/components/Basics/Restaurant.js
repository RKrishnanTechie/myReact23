import React from 'react'
import { useState } from 'react'
import Menu from './MenuApi'
import MenuCard from './MenuCard'
import Navbar from './Navbar'
import "./style.css"    

// creating  an array of unique categories so as to display any new category added in future dynamically on the screen 
const uniqueList = 
    [...new Set(Menu.map((currEle) =>{
        return currEle.category
       
    })
    ),"All"]
    // console.log(uniqueList)

const Restaurant = () => {
    // state is used to store the Menu data
    const [menuData, setMenuData] =  useState(Menu);
    const [menuList , setMenuList] = useState(uniqueList)
    
    const filterMenu = (category) =>{

      if(category === "All"){
        setMenuData(Menu);
        return;
      }
 const filteredMenu = Menu.filter((menu) =>{
    return menu.category === category;
 })

 setMenuData(filteredMenu);
    }
  return (
    
    <>
   
   <Navbar filterMenu={filterMenu} menuList={menuList} />
   
   {/*menu data is sent as prop to MenuCard*/}

    <MenuCard menuData={menuData}/>
   </>
  )
}

export default Restaurant
