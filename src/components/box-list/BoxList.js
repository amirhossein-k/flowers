import React from 'react'
import './boxlist.css'
import pony from '../../pony.jpg'
const BoxList = () => {
    
    const nameUrl = window.location.href;

    const magazine = [
        {src: pony,titlecategory: 'سبد',paraph:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        {src: pony,titlecategory: 'سبد',paraph:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        {src: pony,titlecategory: 'سبد',paraph:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        {src: pony,titlecategory: 'سبد',paraph:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        {src: pony,titlecategory: 'سبد',paraph:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    
    
    ]

  return (
    <div class="outer-wrapper row box-outer">
                       

    <div class="inner-wrapper row-cols-1" style={{margin:'0px !important',padding: 15}}>
      {/* <p className='title'>مجلات</p> */}
  {magazine.map((item,index)=>{
         return(
          <a class="pseudo-item col-sm-6 col-lg-3 col-12 " dir="rtl">
          <div class="box_img" style={{height:150}}>
             <div className='box'> 
             <img src={pony}/>
             </div>
          </div>
          <div class="body body-boxlist">
             {nameUrl==='http://localhost:3000/cart' ? (
                <>
                    <div class="title title-boxlist">پالونیا</div>
                    <div class="cal cal-boxlist">120تومان</div>
   
                </>
             ):(
                <>
                     <div class="title">پالونیا</div>
                        <div class="cal">تاذیخ</div>
                        <div class="para">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Necessitatibus, ipsam beatae.
                            <a>بیشتر...</a>
                    </div>
                </>
             )}
          </div>
      </a>
         )
      })}
      </div>
     
  </div>
  )
}

export default BoxList