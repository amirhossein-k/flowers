import React from 'react'
import { Form } from 'react-bootstrap'
import './formbuy.css'
const FormBuy = () => {
  return (
    <div className='formbuy-container row' dir='rtl'>
      <div className='col-12 form-container'>
        <Form className='row form'>
          <div className='col-12 col-md-6'>
            <div className='box-dahande'>
              <span className='title'>اطلاعات سفارش دهنده</span>
              <Form.Group controlId='name'>
                <Form.Label>نام:</Form.Label>
                <Form.Control type='text' placeholder='نام و نام خانوادگی شما' />
              </Form.Group>
              <Form.Group controlId='phone'>
                <Form.Label >تلفن همراه:</Form.Label>
                <Form.Control type='text' placeholder='تلفن همراه(به انگیلسی وارد شود)' />
              </Form.Group>
              <Form.Group>
                <Form.Label>ادرس ایمیل</Form.Label>
                <Form.Control  type='text' placeholder='الزامی'/>
              </Form.Group>

            </div>

            <div className='box-girandeh'>
            <span className='title'>اطلاعات تحویل گیرنده </span>

             <Form.Group controlId='name'>
                <Form.Label>شهر:</Form.Label>
                <Form.Control type='text' placeholder='نام شهر گیرنده را انتخاب کنید' />
              </Form.Group>
              <Form.Group controlId='phone'>
                <Form.Label >ادرس گیرنده:</Form.Label>
                <Form.Control type='text' placeholder='ادرس محل تحویل' />
              </Form.Group>
              <Form.Group controlId='name'>
                <Form.Label>نام:</Form.Label>
                <Form.Control type='text' placeholder='نام و نام خانوادگی شما' />
              </Form.Group>
              <Form.Group controlId='phone'>
                <Form.Label >تلفن همراه:</Form.Label>
                <Form.Control type='text' placeholder='تلفن همراه(به انگیلسی وارد شود)' />
              </Form.Group>
            </div>

            <div className='box-moredetail'>
              توضحیات بیشتر ارسال
            </div>

          </div>
          
          <div className='col-12 col-md-6'>
            محصول
          </div>
        </Form>
      </div>
    </div>
  )
}

export default FormBuy