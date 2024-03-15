import React from "react"
import Item from "../item/Item"

const ItemList = ({products})=> {

    return (
        <div className = 'd-flex justify-content-center align-items-center flex-wrap'>
            {products.map((producto)=> <Item key={producto.id} producto={producto}/>)}
        </div>
    )
}

export default ItemList