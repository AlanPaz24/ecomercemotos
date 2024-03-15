import React from 'react'
import { useState, useEffect } from 'react'
import { getProducts } from '../../mock/fakeApi'
import ItemCount from '../itemCount/ItemCount'
import ItemList from '../itemList/ItemList'
import { useParams } from 'react-router-dom'

function ItemListContainer({greeting}) {
  const [products, setProducts] = useState([])
  //opcional
  const [error, setError] = useState(false)
  const [loading, setLoading]= useState(false)
 const {categoryId}=useParams()
 
   useEffect(()=>{
     console.log('hola desde el useEffect')
     setLoading(true)
     getProducts()
     .then((res)=>{
       if(categoryId){
        let filtrado= res.filter((prod)=> prod.category === categoryId)
        setProducts(filtrado)
       }else{
         setProducts(res)
       }
     })
     .catch((error)=> setError(error))
     .finally(()=> setLoading(false))
   },[categoryId])
 
   if(loading){
     return <h1>Cargando...</h1>
   }
   if(error){
     return <h1>Hubo un error intente mas tarde</h1>
   }
 
   return (
     <div>
         <h1 className='fst-italic text-danger-emphasis d-flex justify-content-center'>{greeting}</h1>
        <ItemList products={products}/>

        <ItemCount stock={11}/>
      </div>
  )
}
export default ItemListContainer