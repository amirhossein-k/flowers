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
const magazine = [
    {src: pony,titlecategory: 'سبد',paraph:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    {src: pony,titlecategory: 'سبد',paraph:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    {src: pony,titlecategory: 'سبد',paraph:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    {src: pony,titlecategory: 'سبد',paraph:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    {src: pony,titlecategory: 'سبد',paraph:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },


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
                <Col sm={3}  key={index} >
                    <a>
                    <div className='box' >
                        <div className='img-box'>
                            <img src={item.src}/>
                        </div>
                        <div className='body'>
                            <span>{item.titlecategory}</span>
                            <span>{item.price}</span>
                        </div>
                    </div>
                    </a>
                 </Col>
               )
            })}
        </div>
        {/*  */}
        <p className='title_mag'>مجلات</p>
        <div class="outer-wrapper row">
                       

          <div class="inner-wrapper row-cols-1" style={{margin:'0px !important'}}>
            {/* <p className='title'>مجلات</p> */}
        {magazine.map((item,index)=>{
               return(
                <a class="pseudo-item col-sm-6 col-lg-3 col-12 " dir="rtl">
                <div class="box_img">
                   <div className='box'> 
                   <img src={pony}/>
                   </div>
                </div>
                <div class="body">
                    <div class="title">پالونیا</div>
                    <div class="cal">تاذیخ</div>
                    <div class="para">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                         Necessitatibus, ipsam beatae.
                         <a>بیشتر...</a>
                    </div>
                </div>
            </a>
               )
            })}
            </div>
           
        </div>

    </div>
  )
}

export default Category