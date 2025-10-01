import React, { useContext } from 'react'
import ItemsContext from './ItemsContext'

const Shop = () => {
  const {list}=useContext(ItemsContext)
  return (
    <div style={{padding:"20px",textAlign:"center"}}>
        <h1>Shop Page</h1>
         <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gridGap:"10px",gridTemplateRows:"auto"}} >
          {list.map((e)=>{
            return <div key={e.id} style={{border:"2px dotted black",margin:"10px",padding:"10px",borderRadius:"10px",backgroundColor:"white"}}>
                <img src={e.image} alt={e.title} style={{width:"300px",height:"400px"}}/>
                <h3>{e.title}</h3>
                <h4>{e.price}</h4>
            </div>
         })}
         </div>
    </div>
  )
}

export default Shop