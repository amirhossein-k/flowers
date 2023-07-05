import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import  './price.css'
import pony from'../../../pony.jpg'
import { json, useParams } from 'react-router-dom';
import { addCart, listCart } from '../../../actions/cartAction';
import { useDispatch, useSelector } from 'react-redux';
import { productContext } from '../../../App';
import { createRef } from 'react';
import { memo } from 'react';


const Price = ({targetProduct}) => {
  const inputRef = createRef();
  const nameUrl = window.location.href;
  const [order,setOrder] = useState(0)
  const [orderCart,setOrderCart] = useState([])

  const { productId } = useParams();
  const inputvalueRefvalue = useRef([]);
  const dispatch = useDispatch()



  
  const cartList = useSelector(state=>state.listCart)
  const {cartlist} = cartList

  const cartt = useSelector(state=>state.cart)
  const {loading ,cart:cartMessage ,error:errorCart} = cartt

  const [productCon , setProductCon] = useContext(productContext)

  const [productListTarget,setProductListTarget] = useState([])
  const [productCartId,setProductCartId] = useState()
  const [succ,setSucc] = useState(false)

  var newOrder=[]
 
  useEffect(()=>{

    // console.log(cartlist,'cartlist')
    if(cartlist){
      const t= productCon?.filter(item=>{

        var rt= item;
        
        for(var ie =0;ie<cartlist?.length;ie++){
          rt = item._id?.includes(cartlist[ie]?.id)
          if(rt){
            return rt
          }
        }
       
        return rt
        
        })
        // cartlist.map(item=>newOrder.push(item.order))
        cartlist.map(item=> {
          const cart ={"order":item.order}
          newOrder.push(cart)
        })
        setOrderCart(newOrder)
        console.log(order,'order ones')
        console.log(cartlist,'cartlist ones')
        setProductListTarget(t)
        
        // console.log(cartlist[0]?.order,'ttp6666666666')
    }
  },[cartList,productCon])

  // useEffect(()=>{},[orderCart])
  

  var cart 
  var filterCart

  // useEffect(()=>{
  //   if(productCon){

  //     var add_cart = document.querySelectorAll('.add-countianer .box-add .add_cart')
  //     console.log(add_cart,'add cart')
  //     // add_cart[0].value = 1
  //     for(var i =0; i<add_cart.length ; i++){
  //       add_cart[i].value =num
  //     }
  //   }
  // },[productListTarget])
 
  // var list = JSON.parse(localStorage.getItem('cartlist'))
  // console.log(list,'list out')

//  cart list/////////////////////////
  useEffect(()=>{
    if( order < 0) {

      setOrder(0)
      console.log('0')
    }else{
      var list= localStorage.getItem("cartlist") ? JSON.parse(localStorage.getItem("cartlist")) : [];
      console.log(inputRef,'input ref')
      console.log(list,'list list')
      // console.log(inputvalueRefvalue.current,'67676')
      
      if(nameUrl === 'http://localhost:3000/cart' ){
        // inputvalueRefvalue.current.value = order
        // console.log(inputvalueRefvalue.current,'67676')
        // if(inputvalueRefvalue.current)inputvalueRefvalue.current.value = order
        
      }
      if(succ){
        console.log(succ,'if')
        if(!list || list.length ===0){
          if(nameUrl !== 'http://localhost:3000/cart'){
            // صفحه مروبط به محصول و برای اولیین بار
            const cart = {"id":productId,"order":order}
            list.push(cart)
            console.log('if')
            localStorage.setItem('cartlist',JSON.stringify(list))
            setOrder(0)
            dispatch(addCart())

            setSucc(false)
    
          }
          // else{
          //   // صفحه مروبط به لیست کارتها و برای اولین بار
          //   // که اولین باری در کار نیس قطعا
          // }
        }else{
          
    
          // اگر برای اولین بار نبود و میخواستی اپدیت کنی تعداد را
          list = JSON.parse(localStorage.getItem('cartlist'))
          console.log(inputvalueRefvalue.current,'rt')
         
            
            if(nameUrl !== 'http://localhost:3000/cart'){
              // تعداد را اپدیت کنی در صفحه مروبط به مخصول
              cart = {"id":productId,"order":order}
              filterCart = list.filter(item=>item.id !== productId)
              console.log(nameUrl,'pr')
              filterCart.push(cart)
              localStorage.removeItem('cartlist')
              localStorage.setItem('cartlist',JSON.stringify(filterCart))
              dispatch(addCart())
              console.log(succ,'succ')
              setSucc(false)
            }else{
              // تعداد را اپدیت کنی در صفحه لیست کارت
              // console.log(nameUrl)
              
          
              // const target_order = orderCart.filter(item=>item.id=== inputRef.current.id)
              // cart = {"id":inputRef.current.id,"order":target_order[0].order}
              // console.log(inputvalueRefvalue.current,'ctt')
         
              
              // filterCart = list.filter(item=>item.id !== inputRef.current.id)
              // console.log(filterCart,'filter ca')
            }
            
            // setOrder(0)
        }
      }
  
    }
    
   
  },[order,succ,orderCart])

  const Addhandler = (e)=>{
    var list= localStorage.getItem("cartlist") ? JSON.parse(localStorage.getItem("cartlist")) : null;
  
    if(nameUrl === 'http://localhost:3000/cart'){
      console.log('upda')

      const target_order = orderCart.filter(item=>item.id=== e.target.id)
      console.log(target_order,'target_order')
      cart = {"id":e.target.id,"order":target_order[0].order}
      console.log(inputvalueRefvalue.current,'ctt')
 
      
      filterCart = list.filter(item=>item.id !== e.target.id)
      console.log(filterCart,'filter ca')
      filterCart.push(cart)
      localStorage.removeItem('cartlist')
      localStorage.setItem('cartlist',JSON.stringify(filterCart))
      dispatch(addCart())
      console.log(succ,'succ')
      setSucc(false)

    }else{
        setSucc(true) 

      }

  }
// ///////////////////////////////////////end cart list
  useEffect(()=>{
    // const cartorder =[]
    console.log('ooo000000000')
    dispatch(listCart())
  //  window.location.reload()
  
  },[loading])

    const handleDelete = (e)=>{

      const id = e.target.id
      const localcart = JSON.parse(localStorage.getItem('cartlist'))
      // const localcartt = JSON.parse(localStorage.getItem('cart'))
      // console.log(localcart,'localcart')
      localStorage.setItem('cartlist',JSON.stringify( localcart.filter(item=>item.id !==id)))
      // localStorage.setItem('cart',JSON.stringify( localcartt.filter(item=>item.id !==id)))
      // setCartItem(JSON.parse(localStorage.getItem('cartlist')) )
      dispatch(listCart())
      dispatch(addCart())
      
    
  }

  const addHandert = useCallback((e,index)=>{
    console.log(order,'order')
                                  
                                  setOrderCart(prev=>{
                                    return prev.map((itemm,indexx)=>{
                                      if(indexx === index){
                                        return {"order":itemm.order + 1,"id":e.target.id}
                                      }else{
                                        return {...itemm}
                                      }
                                    })
                                  })
                                  console.log(orderCart,'order 2')

                          
  },[orderCart,order])
 
 
  return (
    <>
   {nameUrl===`http://localhost:3000/product/${productId}` ? (
    
    <div className='price-container row' dir='rtl'>
        
        <div className='col-12'><p>{targetProduct?.price} <span>تومان</span></p></div>
        <div className='col-12'> {targetProduct?.count !=='0'  ? <p>موجود در انبار</p>: <p style={{color:'red'}}>ناموجود در انبار</p>} </div>
        <div className='col-12'> 
   
          <div className='add-countianer'>
          <span className='title-add' onClick={e=>Addhandler(e)} >افزودن به سبد خرید </span> 
        
            <div className='box-add'>
              <div className='inc'>
                <i className="bi bi-plus" onClick={e=>setOrder(order+ 1)} ></i>
              </div>
              <div className='input'>
                <input type="text" required defaultValue={0}  value={order} />
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
          <div className='row  g_5'>
            {/* 1 item */}

            {cartlist && cartlist.length>0 && productListTarget?.map((item,index)=>{

              return(
                <div className='col-12'>
                <div className='row border_cart g-lg-1' >
                  {/* delete */}
                  <div className=' col-12 col-xxl-1  col-lg-1 d-flex justify-content-center align-items-center'>
                   <i className="bi bi-x-circle d-flex justify-content-center hover_delete_cart" style={{fontSize:36 ,padding: '6px 0'}} onClick={e=>handleDelete(e)} id={item._id}></i>
                  </div>
                  {/* img */}
                  
                  <div className='col-12 col-xxl-2 col-xl-2 col-lg-2 col-md-11  '>
                    <div className='box-img'>
                      <img src={item.pic[0]} />
                    </div>
                  </div>
                  {/* title */}
                  <div className='col-12 col-xl-2 col-lg-2 col-xs-3'>
                    {/* <div className='row h-100'> */}

                      <div className='title_cart '><p>{item.title}</p></div>
                      

                    {/* </div> */}
                  </div>
                  <div className='col-12 col-xl-1 col-lg-1'>
                    <div className='row h-100'>
                      <div className='col-12 color_title_cart'>color</div>
                            <div className='col-12 container_color_cart'>
                              <div className='row h-100'>
                                {item.color?.map(color=>{
                                  return(
                                    <div className='col-12 d-flex justify-content-center'>{color}</div>
                                  )
                                })}
                             
                              </div>
                            </div>
                      </div>
                  </div>
                  {/* detail price & staus count */}
                  <div className='col-12 col-xl-3 col-lg-4 col-md-12 '>
                    <div className='row'>
                      <div className='col-12'><p>{item.price} <span>تومان</span></p></div>
                      <div className='col-12'> <p>موجود در انبار</p> </div>

                      <div className='col-12'> 
                
                        <div className='add-countianer w-100 row' >
                          <div className='col-6 col-xxl-7 col-xl-9 col-lg-7 col-md-4 col-sm-5'>

                            <span className='title-add ' onClick={e=>Addhandler(e)} ref={inputRef} id={item._id}>افزودن به سبد خرید </span> 
                          </div>
                      
                          <div className='col-6 col-xxl-7 col-xl-9 col-lg-7 col-md-4 col-sm-5'>

                            <div className='box-add '>
                              <div className='inc'>
                                {/* <i className="bi bi-plus" onClick={e=>{
                                  console.log(order,'order')
                                  
                                  setOrderCart(prev=>{
                                    return prev.map((itemm,indexx)=>{
                                      if(indexx === index){
                                        return {"order":itemm.order + 1,"id":e.target.id}
                                      }else{
                                        return {...itemm}
                                      }
                                    })
                                  })
                                  console.log(orderCart,'order 2')

                                } } id={item._id}></i> */}
                                <i className="bi bi-plus" onClick={e=>addHandert(e,index)} id={item._id}></i>
                              </div>
                              <div className='input'>
                                <input type="text" required className='add_cart' value={orderCart[index].order}   id={item._id} />
                              </div>
                          
                                <div className='inc'>
                                  <i className="bi bi-dash" onClick={e=>setOrder(order-1)}></i>
                                </div>
                          
                            </div>
                          </div>

                      
                        </div>

                      </div>

                    </div>
                  </div>
                  {/* total peice  */}
                  <div className='col-12 col-xl-2 col-lg col-md-12'>
                    <div className='row h-100'>
                      <div className='col-12 d-flex justify-content-center'> جمع کل </div>
                      <div className='col-12 d-flex justify-content-center'>  {cartlist[index]?.order * item.price}</div>
                    </div>
                  </div>

                </div>
              </div>
              )

            })}
            {/* item 2 */}
           

          </div>


        </div>
        {/* price total */}
        <div className='col-12 col-lg-3    my-flex'>
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

export default memo (Price)