import React from 'react'
import { data} from '../data'
import ProductCard from './ProductCard'
import { useParams } from 'react-router-dom'

const SimilarProducts = ({id}) => {
  const uri=useParams()
  const products=data.filter((item)=>item.brand===uri.category)
  const similarProducts=products.filter((item)=>item.id!==id)
  
    
  return (
   <div className=' px-7 mt-12'>
    <h1 className='text-[25px] font-bold pb-5 border-b mb-5'>Similar products</h1>
     <div className='grid grid-cols-5 gap-4'>
     {
         similarProducts.slice(0,5).map((item,index)=>(
          <div key={index}>
              <ProductCard product={item} height={{boxHeight:"380px",imgHeight:"280px"}}/>
          </div>
          ))
     }
    </div>
   </div>
  )
}

export default SimilarProducts
