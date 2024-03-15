import React from 'react'
import ItemCount from '../itemCount/ItemCount'

const ItemDetail = ({productDetail}) => {
  return (
    <div>
        <div>
        <h3>Detalle de : {productDetail.name}</h3>
        <img src={productDetail.imagen} alt={productDetail.name}/>
        <p>{productDetail.description}</p>
        <p>${productDetail.price}</p>
        </div>
        <ItemCount stock={productDetail.stock}/>
        
    </div>
  )
}

export default ItemDetail