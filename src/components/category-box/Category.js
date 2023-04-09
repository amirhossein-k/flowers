import React, { useEffect } from 'react'
import { Col } from 'react-bootstrap'
import "./category.css"
import pony from '../../pony.jpg'


const category = [
    {src: pony,titlecategory: 'سبد'},
    {src: pony,titlecategory: 'سبد'},
    {src: pony,titlecategory: 'سبد'},
    {src: pony,titlecategory: 'سبد'},
    {src: pony,titlecategory: 'سبد'},
    {src: pony,titlecategory: 'سبد'},
    {src: pony,titlecategory: 'سبد'}
]
const categorynew = [
    {src: pony,titlecategory: 'سبد',price:100},
    {src: pony,titlecategory: 'سبد',price:100},
    {src: pony,titlecategory: 'سبد',price:100},
    {src: pony,titlecategory: 'سبد',price:100},

]
const Category = () => {

    // window.onresize  = function () {
    //     if(window.innerWidth<678){
    //         const row = document.querySelector('.category-container')
    //         row.style.maxWidth='100%'
    //     }else if(window.innerWidth>1050){
    //         const row = document.querySelector('.category-container')

    //         row.style.maxWidth='39%'
    //     }else {
    //         const row = document.querySelector('.category-container')

    //         row.style.maxWidth='50%'
    //     }
        
    //   };

  return (
    <div className='category-container row'>

        {/*  */}
        <div className='row list-gat-box'>
            {category.map((item,index)=>{
               return(
                <Col sm={4} lg={2} key={index} >
                    <div className='box' >
                        <img src={item.src}/>
                        <span>{item.titlecategory}</span>
                    </div>
                </Col>
               )
            })}
        </div>
        {/*  */}
        <div className='row new-pro-box'>
            <p className='title'>جدیدترین محصولات</p>
        {categorynew.map((item,index)=>{
               return(
                <Col sm={3}  key={index} style={{backgroundColor:'red'}}>
                    <div className='box' >
                        <div className='img-box'>
                            <img src={item.src}/>
                        </div>
                        <div className='body'>
                            <span>{item.titlecategory}</span>
                            <span>{item.price}</span>
                        </div>
                    </div>
                 </Col>
               )
            })}
        </div>

    </div>
  )
}

export default Category