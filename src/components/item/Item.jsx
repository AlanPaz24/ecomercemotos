import React from 'react'
import { Link } from 'react-router-dom'


const Item = ({producto}) => {
  return (
    <div className= 'card' style={{width:'20rem'}}>
        <img src={producto.imagen} alt= {producto.name} className='card-img-top'/>
        <div className= 'card-body'>
            <p className= 'card-text'>{producto.name}</p>
        </div>
        <Link className= 'btn btn-primary' to={`/item/${producto.id}`}>Ver más</Link>
    </div>
  )
}

export default Item