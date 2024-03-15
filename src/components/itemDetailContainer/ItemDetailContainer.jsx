import React, { useEffect, useState } from 'react'
import { getOneProduct } from '../../mock/fakeApi'
import ItemDetail from '../itemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] =useState({})
    const [loading, setLoading] = useState(false)
    const {itemId}= useParams()
    console.log(itemId)
    useEffect(()=>{
        setLoading(true)
        getOneProduct(itemId)
        .then((res)=> setProductDetail(res))
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    },[])

    if(loading){
        return<h1 className='d-flex justify-content-center'>Cargando detalle...</h1>
    }
  return (
    <div className='d-flex justify-content-center'>
        <ItemDetail productDetail={productDetail}/>
    </div>
  )
}

export default ItemDetailContainer