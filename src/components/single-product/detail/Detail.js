import React from 'react'
import './detail.css'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import pony from '../../../pony.jpg'
import headerp from '../../../header-asl.jpg'
const Detail = () => {
  return (
    <div className='row detail-container' dir='rtl'>
      <div className='col-12 col-sm-6 '>
      <AwesomeSlider>
    <div><img src={pony}/></div>
    <div><img src={headerp}/></div>
    <div><img src={pony}/></div>
    <div><img src={headerp}/></div>
    
  </AwesomeSlider>

      </div>
      <div className='col-12 col-sm-6'>
        <div className='table-container'>
          <div className='row'>
            <div className='col-12 col-lg-4'>
              <div className='box'>
                <p>طول</p>
                <p>120</p>
              </div>
            </div>
            <div className='col-12 col-lg-4'>
            <div className='box'>
                <p>عرض</p>
                <p>150</p>
              </div>
            </div>
            <div className='col-12 col-lg-4'>
              <div className='box'>
                  <p>ارتفاع</p>
                  <p>100</p>
                </div>
            </div>
            <div className='col-12 '>
              <div className='box'>
                  <p>توضیحات تکمیلی</p>
                  <p>حمل این محصول به سراسر تهران رایگان می‌باشد.

                 <span> گیاه یک موجود زنده میباشد پس در نتیجه محصول شما دقیقا مطابق عکس داخل سایت نمی‌باشد.</span>


                  </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail