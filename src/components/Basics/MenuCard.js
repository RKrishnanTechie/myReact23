import React from 'react'

// receiving the prop from Restaurant(parent)
function MenuCard({menuData}) {
    // console.log(menuData)
    return(
        <>
        <section className="main-card--cointainer">
        {/*mapping on the array by using id as key to print different cards */}
        {menuData.map((curElem)=>{
            // destructuring
            const {id,name,description,price,category,image} = curElem;
        return (
            <>
            <div className="card--cointainer" key={id}>
            
              <div className="card ">
                <div className="card-body">
                  <span className="card-number card-circle subtle">{id}</span>
                  <span className="card-author subtle">{category}  </span>
                  <h2 className="card-title"> {name} </h2>
                  <span className="card-description subtle">
                  {description}
                  </span>
                  <div className="card-read">Read</div>
                </div>
                <img src={image} alt="images" className="card-media" />
        
                <span className="card-tag  subtle">Order Now</span>
              </div>
            </div>
          </>

   ) })}
   </section>
   </>
  )
}


export default MenuCard
