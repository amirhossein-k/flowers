import React from 'react'
import  './price.css'
import pony from'../../../pony.jpg'

const Price = () => {
  const nameUrl = window.location.href;
  
  console.log(nameUrl)
  return (
    <>
   {nameUrl==='http://localhost:3000/product/productId' ? (
    
    <div className='price-container row' dir='rtl'>
        
        <div className='col-12'><p>1,550,000 <span>تومان</span></p></div>
        <div className='col-12'> <p>موجود در انبار</p> </div>
        <div className='col-12'> 
   
          <div className='add-countianer'>
          <span className='title-add'>افزودن به سبد خرید </span> 
        
            <div className='box-add'>
              <div className='inc'>
                <i className="bi bi-plus"></i>
              </div>
              <div className='input'>
                <input type="text" required  value={1}/>
              </div>
           
                <div className='inc'>
                  <i className="bi bi-dash"></i>
                </div>
           
            </div>

         
          </div>
        </div>
        

    </div>
   
   ): (
    <div className='price-container row' dir='rtl'>
        <div className='col-12 col-md-6'>

        <div className='col-12'>
          <div className='box-img'>
            <img src={pony} />
          </div>
        </div>

        <div className='col-12'><p>1,550,000 <span>تومان</span></p></div>
        <div className='col-12'> <p>موجود در انبار</p> </div>
        <div className='col-12'> 
   
          <div className='add-countianer'>
          {/* <span className='title-add'>افزودن به سبد خرید </span>  */}
        
            <div className='box-add'>
              <div className='inc'>
                <i className="bi bi-plus"></i>
              </div>
              <div className='input'>
                <input type="text" required  value={1}/>
              </div>
           
                <div className='inc'>
                  <i className="bi bi-dash"></i>
                </div>
           
            </div>

         
          </div>
        </div>

        </div>
        <div className='col-12 col-md-6  my-flex'>

          <div className='offer-code'>
            <div className='box'>
              <input placeholder='کد'/>
              <span>اعمال کد تخفیف</span>
            </div>
          </div>

          <div className='total-container'>

            <span className='title'>مجموع کل سبد خرید</span>

            <div className='box-total-price'>

              <div className='box-price'>

                <span>قیمت کل	</span>
                <span>1,090,000 تومان</span>

              </div>

              <div className='box-price'>
                <span> پرداختی شما	</span>
                <span>1,090,000 تومان</span>
              </div>

            </div>

            <div className='button'>
              <a >ثبت سفارش</a>
            </div>

          </div>

        </div>

    </div>
   )}
   </>
  )
}

export default Price