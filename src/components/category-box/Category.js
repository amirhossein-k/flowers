import React from 'react'
import { Col } from 'react-bootstrap'
import "./category.css"
import pony from '../../pony.jpg'
const Category = () => {

    window.onresize  = function () {
        if(window.innerWidth<678){
            const row = document.querySelector('.category-container')
            row.style.maxWidth='100%'
        }else{
            const row = document.querySelector('.category-container')

            row.style.maxWidth='50%'
        }
        console.log(window.innerWidth)
      };
  return (
    <div className='category-container row'>
        <Col sm={4}>
            <div className='box' >
                <img src={pony}/>
                <span>سبد گل</span>
            </div>
        </Col>
        <Col sm={4}>
        <div className='box' >
                <img src={pony}/>
                <span>سبد گل</span>
            </div>
        </Col>
        <Col sm={4}>
        <div className='box' >
                <img src={pony}/>
                <span>سبد گل</span>
            </div>
        </Col>
        <Col sm={4}>
        <div className='box' >
                <img src={pony}/>
                <span>سبد گل</span>
            </div>
        </Col>
        <Col sm={4}>
        <div className='box' >
                <img src={pony}/>
                <span>سبد گل</span>
            </div>
        </Col>
        <Col sm={4}>
        <div className='box' >
                <img src={pony}/>
                <span>سبد گل</span>
            </div>
        </Col>
    </div>
  )
}

export default Category