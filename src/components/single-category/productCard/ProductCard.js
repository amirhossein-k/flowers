import React from 'react'
import './productCard.css'
import pony from '../../../pony.jpg'
const ProductCard = () => {
  return (
    <div className='productcard-container row' dir='rtl'>
      <div className='col-11'>
        <div className='filter-container'>
          <div className='filter-box'>
            <a>جدیدترین</a>
            <a>جدیدترین</a>
            <a>جدیدترین</a>
          </div>
        </div>
      </div>
      <div className='col-11'>
        <div className='card-container'>
            <div className='card-box row'>

              <div className='col-12 col-sm-6 col-lg-3 '>
                <div className='box'>

                  <div className='image-box'>
                    <img src={pony} alt='photo'/>
                  </div>

                  <div className='body'>
                    <span>شماره 1</span>
                    <span>28000</span>
                  </div>

                  <div className='footer'>
                    <span>سبد لیلیوم</span>
                  </div>
                  
                </div>
              </div>

              <div className='col-12 col-sm-6 col-lg-3'>
                 <div className='box'>

                  <div className='image-box'>
                    <img src={pony} alt='photo'/>
                  </div>

                  <div className='body'>
                    <span>شماره 1</span>
                    <span>28000</span>
                  </div>

                  <div className='footer'>
                    <span>سبد لیلیوم</span>
                  </div>
                  
                </div>
              </div>

              <div className='col-12 col-sm-6 col-lg-3'> 
                <div className='box'>

                    <div className='image-box'>
                      <img src={pony} alt='photo'/>
                    </div>

                    <div className='body'>
                      <span>شماره 1</span>
                      <span>28000</span>
                    </div>

                    <div className='footer'>
                      <span>سبد لیلیوم</span>
                    </div>
                    
                  </div>
                </div>

              <div className='col-12 col-sm-6 col-lg-3'> 
                <div className='box'>

                    <div className='image-box'>
                      <img src={pony} alt='photo'/>
                    </div>

                    <div className='body'>
                      <span>شماره 1</span>
                      <span>28000</span>
                    </div>

                    <div className='footer'>
                      <span>سبد لیلیوم</span>
                    </div>
                    
                  </div>
              </div>

              <div className='col-12 col-sm-6 col-lg-3'> 
                <div className='box'>

                    <div className='image-box'>
                      <img src={pony} alt='photo'/>
                    </div>

                    <div className='body'>
                      <span>شماره 1</span>
                      <span>28000</span>
                    </div>

                    <div className='footer'>
                      <span>سبد لیلیوم</span>
                    </div>
                    
                  </div>
              </div>

            </div>
          </div>
      </div>
    </div>
  )
}

export default ProductCard