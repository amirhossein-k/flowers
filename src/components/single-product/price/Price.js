import React, { useEffect, useState } from 'react'
import  './price.css'
import pony from'../../../pony.jpg'
import { json, useParams } from 'react-router-dom';
import { addCart } from '../../../actions/cartAction';
import { useDispatch, useSelector } from 'react-redux';

const Price = ({targetProduct}) => {
  const nameUrl = window.location.href;
  const [order,setOrder] = useState(0)
  const { productId } = useParams();
  const dispatch = useDispatch()

  const cartt = useSelector(state=>state.cart)
  const {loading ,cart:cartMessage ,error:errorCart} = cartt

  var get =[]
  var cart = {'id': productId,'order':order}
  var gett2= localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : null;
  // var parss= JSON.parse(gett2)
  // console.log( parss[0],'pars')
  // console.log( gett2,'gett2 b')
  // const objectIndex = parss.findIndex(obj=> obj.id === productId)
  // console.log(objectIndex,'objectIndex')
  console.log( gett2,'get ff')
  useEffect(()=>{
    if( order <= 0) {

      setOrder(0)
    }else{

      // console.log(typeof parss,'ooo')
      if( gett2 !==null  ){
       var gett22= localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : null;

        const inde =gett22.findIndex(obj=>obj.id === productId) 
        console.log(inde,'inde')
        if(inde !== -1){
          var getin= localStorage.getItem('cart')
          var parssin= JSON.parse(getin)
          const objectIndex = parssin.findIndex(obj=> obj.id === productId)
          console.log(parssin,'cart feiili')
          console.log(objectIndex,'index order prev')
          const orderprev = parssin[objectIndex].order
          //  console.log(parssin[0].order,'f')
          console.log(parssin[objectIndex],'order prev')
          console.log(gett2,'cart feiili 1')
          parssin[objectIndex].order = order + orderprev
          console.log(get,'get')
          console.log(parssin[objectIndex],'parssin edite')
          console.log(parssin,'parssin edite pp')
          console.log(getin,'getin')
          console.log(get,'getu')
          get.push(parssin[objectIndex])
          console.log(get,'getu 2')
          console.log('22')
          var getlist= localStorage.getItem("cartlist") ? JSON.parse(localStorage.getItem("cartlist")) : null;
          console.log(getlist,'et')
          if(getlist !== null){
            const objectIndexx = getlist.findIndex(obj=>obj.id === productId)
            console.log('if nu',objectIndexx)
            if(objectIndexx === -1){
              console.log(getlist,'if null')
              console.log(typeof getlist,'if null type')
              var getlis=[]
              // getlis.push(getlist)
              // getlis.push()
              // get.push(getlist)
              console.log(get,'gettt')
              getlist.map(item=> get.push(item))
              console.log(get,'get finls')
            }
            else{
               const ie=getlist.filter(item=>item.id !== parssin[objectIndexx].id)
              ie.map(item=>get.push(item))
              console.log(get,'get else')
              // localStorage.setItem('cartlist',JSON.stringify(get))
            }
            
          }else{
            getlist.map(item=>get.push(item))
            console.log(get,'get else')
            // localStorage.setItem('cartlist',JSON.stringify(get))
          }
        }else{
          console.log('firtss time')
          
          var getlist= localStorage.getItem("cartlist") ? JSON.parse(localStorage.getItem("cartlist")) : null;
          if(getlist !== null){
            const objectIndexx = getlist.findIndex(obj=>obj.id === productId)
            console.log('if nu',objectIndexx)
            if(objectIndexx === -1){
              console.log(getlist,'if null')
              console.log(typeof getlist,'if null type')
              var getlis=[]
              // getlis.push(getlist)
              // getlis.push()
              // get.push(getlist)
              get.push(cart)
              getlist.map(item=> get.push(item))
              console.log(get,'get finls')
              // localStorage.setItem('cartlist',JSON.stringify(getlis))
            }
          }else{
            get.push(cart)
          }
        }
        console.log('qhablan dar cart nabode')

      }else{
        // first time add
        get.push(cart)
        console.log('first')
      }
    } 
    

   
  },[order])
  useEffect(()=>{
    // const cartorder =[]
    console.log('ooo000000000')
  //  window.location.reload()
  
  },[loading])
  const Addhandler = (e)=>{
    // e.preventDefault()
    // const cart = {'id': productId,'order':order}
    console.log('افوده شذ')
    if(order !== 0 ) {
      
     
      // dispatch(addCart(productId,order))
      localStorage.setItem("cart", JSON.stringify(get));
      localStorage.setItem('cartlist',JSON.stringify(get))
      dispatch(addCart())
      setOrder(0)
    }
  }
  
  return (
    <>
   {nameUrl===`http://localhost:3000/product/${productId}` ? (
    
    <div className='price-container row' dir='rtl'>
        
        <div className='col-12'><p>{targetProduct?.price} <span>تومان</span></p></div>
        <div className='col-12'> {targetProduct?.count !=='0'  ? <p>موجود در انبار</p>: <p style={{color:'red'}}>ناموجود در انبار</p>} </div>
        <div className='col-12'> 
   
          <div className='add-countianer'>
          <span className='title-add' onClick={e=>Addhandler(e)}>افزودن به سبد خرید </span> 
        
            <div className='box-add'>
              <div className='inc'>
                <i className="bi bi-plus" onClick={e=>setOrder(order+1)}></i>
              </div>
              <div className='input'>
                <input type="text" required  value={order} />
              </div>
           
                <div className='inc'>
                  <i className="bi bi-dash" onClick={e=>setOrder(order-1)}></i>
                </div>
           
            </div>

         
          </div>
        </div>
        

    </div>
   
   ): (
    <div className='price-container row' dir='rtl'>
      {/* list cart */}
        <div className='col-12 col-md'>
          <div className='row'>
            {/* 1 item */}
            <div className='col-12'>
              <div className='row'>

                <div className='col-2'>
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
            </div>
            {/* item 2 */}
            <div className='col-12'>
              <div className='row'>

                <div className='col-2'>
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
            </div>

          </div>


        </div>
        {/* price total */}
        <div className='col-12 col-lg-3  col-md-4  my-flex'>
          <div className='row'>
            <div className='col-12'>

                <div className='offer-code w-100'>
                  <div className='box'>
                    <input placeholder='کد'/>
                    <span>اعمال کد تخفیف</span>
                  </div>
                </div>
            </div>

            <div className='col-12'>

              <div className='total-container w-100'>

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

          


        </div>

    </div>
   )}
   </>
  )
}

export default Price