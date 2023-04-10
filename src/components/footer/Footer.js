import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <div className='row footer-container'>
        <div className='col-md-3 col-12 col'>
         <div className='box-title'>دسته بندی</div>
            <div className='row box-container'>
                <div className='col-12'>
                    
                </div>
                <div className='col-12'>
                    <div className='box'><a>انواع گل</a></div>
                </div>
                <div className='col-12'> <div className='box'><a>گلهای اپارتمانی</a></div></div>
                <div className='col-12'> <div className='box'><a> انواع کاکتوس</a></div></div>
            </div>
        </div>
        <div className='col-md-3 col-12 col'> 
        <div className='box-title'>شبکه های مجازی </div>
            <div className='box'>
                <a>اینستا</a>
                <a>تلگرام</a>
                <a>واتس اپ</a>
            </div>
         </div>
        <div className='col-md-3 col-12 col'>
        <div className='box-title'>اطلاعات تماس </div>
            <div className='box'>
                <div className='open'>
                    <p>شنبه- پنجشبه: 8 - 17:30  </p>
                </div>
                <div className='address'>
                    <p>تهران:پیروزی </p>
                </div>
                <div className='phone'>
                    <p>09391470427 </p>
                </div>
                <div className='e-mail'>
                    <p>haamir3030@gmail.com </p>
                </div>
            </div>
        </div>
        <div className='col-md-3 col-12 col'> 
        <div className='box-title'>نماد اعتماد </div>
            <div className='box'>
                <img src='' alt='photo'/>
                
                <img src='' alt='photo'/>
            </div>
        </div>
    </div>
  )
}

export default Footer