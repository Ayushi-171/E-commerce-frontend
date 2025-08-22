import logo from './logo.svg';
import './App.css';
import Category from './category';
import axios from 'axios';
import {useEffect, useState} from 'react';

function App(){

  let [finalCategory,setFinalCategory]=useState([])
  let [finalPro,setFinalProduct]=useState([])
  let [catName,setCatname]=useState('')

  let getCategory=()=>{
    axios.get('https://dummyjson.com/products/category-list')
    .then((res)=>res.data)
    .then((finalRes)=>{
    setFinalCategory(finalRes)
    })
   
  }
    let getProducts=()=>{
      axios.get('https://dummyjson.com/products')
      .then((proRes)=>proRes.data)
      .then((finalRes)=>{
      setFinalProduct(finalRes.products)
      
      })
  }
  useEffect(()=>{
    getCategory();
    getProducts();
  },[])

 useEffect(()=>{
  if(catName!==""){
    axios.get(`https://dummyjson.com/products/category/${catName}`)
    .then((proRes)=>proRes.data)
    .then((finalRes)=>{
    setFinalProduct(finalRes.products)
    })
  }
 },[catName])

 let Pitems=finalPro.map((products,index)=>{
  return(
    <ProductItems key={index} pdata={products}/>
  )
 })


 return (
    <>
     <div className="py-[40px]">
      <div className='max-w-[1320px] mx-auto'>
        <h1 className='text-center text-[40px] font-bold mb-[30px]'>Our products</h1>
        <div className='grid grid-cols-[30%_auto] gap-[20px]'>
          <div>
             <Category finalCategory={finalCategory} setCatname={setCatname}/>
          </div>

          <div>
            <div className='grid grid-cols-3 gap-4'>
              
             {
              finalPro.length>=1 ?
              Pitems
              :
             'No Product Found'
             }

            </div>
          </div>
        </div>
      </div>
     </div>

    </>
  );
}
 
export default App;

function ProductItems({pdata}){
  return(
    <div className='shadow-lg text-center pb-4'>
      <img src={pdata.thumbnail} className='w-[70%] h-[250px]'/>
        <h4>
          {pdata.title}
        </h4>
        <b>Rs{pdata.price}</b>
    </div>
  );

}