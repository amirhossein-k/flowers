import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showToast } from '../../../actions/toastAction'
import { updateUser } from '../../../actions/userAction'
import styles from './address.module.scss'
const Address = () => {

  const dispatch = useDispatch()
  const userLogin = useSelector(state=>state.userLogin)
  const {error,loading,userInfo} = userLogin

  const userUpdate = useSelector(state=>state.userUpdate)
  const {success} = userUpdate

  const [edite,setEdite]= useState(false)
  const [location,setLocation]= useState('')
  const [zipCode,setZipCode]= useState('')
  useEffect(() => {
    if(userInfo){
      setLocation(userInfo.detail[0].address[0]?.location)
      setZipCode(userInfo.detail[0].address[0]?.zipcode)
    }
 }, [userInfo]);
  // useEffect(()=>{
  //   console.log(edite,'edite 0')
  //   if(edite === true){
  //     console.log(edite,"edit 1")
  //     if(success) {
  //       console.log(edite,"edit 2")
  //       setEdite(false)
  //     }
  //   }
  // },[edite,success])

  const items = [
    {
        "title": 'ادرس',
        "icon": <i className={`bi bi-compass ${styles.i}`} ></i>
    },
    {
        "title": 'کدپستی',
        "icon": <i className={`bi bi-geo-alt ${styles.i}`}></i>
    },
   
]

const submitUpdate = async(e)=>{
  e.preventDefault();
// console.log(zipCode,'zip')
 const  address =  [{"location":location,"zipcode":zipCode}]
 
  dispatch(updateUser(undefined,undefined,undefined,undefined,undefined,address))
  dispatch(showToast('اپدیت شد'))

  setTimeout(()=>{
    
    setEdite(false)
  },500)
  
}
  return (
    <div className={`row h-100 position-relative ${styles.address_container}  g-4 `} dir='rtl'>
        <div className={`col-12  ${styles.edite} `} > <div className={`${edite ? styles.cancel : styles.normal}`}  onClick={e=>setEdite(!edite)}> {edite ? 'انصراف' : "ویرایش اطلاعات"}</div></div>

              <div className='col-8 col-lg-7'>
                <div className={`row ${styles.container_item}`}>
                {userInfo && items.map((item,index)=>{
                  return(
              
                      <>
            
                            {/* item 1 */}
                            <div className={`col-10`}>
                              <div className={`row ${styles.item_child}`}>
                                <div className={`col-4 d-flex justify-content-end align-items-center ${styles.item_child_box}`}>
                                  <div className={`row w-100`}>
                                    <div className={`col-4`}>{item.icon}</div>
                                    <div className={`col-8 ${styles.cursor}`}>{item.title}</div>
                                  </div>
                                </div>
                                <div className={`col ${!edite ? 'd-flex' : 'd-none'}`} >
                                  {(()=>{
                                        switch(item.title){
                                           
                                            case 'ادرس':
                                              return  userInfo.detail[0]?.address[0]?.location
                                            case 'کدپستی':
                                              return  userInfo.detail[0]?.address[0]?.zipcode
                                           
                                             default:
                                                return 'ggg'
                                        }
                                    })()}
                                  </div>
                               
                                 <div className={`col ${styles.item_child_input} ${edite ? 'd-flex' : 'd-none'}`}>
                                 {(()=>{
                                     switch(item.title){
                                         case 'ادرس':
                                     //  return   <input className={`${styles.effect_19}`} type="text" placeholder="" value={address}  onChange={e=>setAddress(e.target.value)}/>
                                     return (
                                       <textarea 
                                       className={`${styles.effect_19} w-100`}  value={location}  onChange={e=>setLocation(e.target.value)}
                                       name="story"
                                               rows={2} >
                                       {/* {address} */}
                                       </textarea>

                                     )
                             
                                     case 'کدپستی':
                                       return  <input className={`${styles.effect_19}`} type="text" placeholder="" value={zipCode} onChange={e=>setZipCode(e.target.value)}/>
                       
                                      default:
                                         return ''
                                     }
                                 })()}
                                     {/* <input className={`${styles.effect_19}`} type="text" placeholder=""/> */}
                                     <label> {item.title}</label>
                                     <span className={`${styles.focus_border}`}>
                                         <i></i>
                                     </span>
                           </div>
                              
                              </div>
                            </div>
                      </>
                  )
                } ) }
                 </div>
                 <div className={`row ${edite ? 'd-block': 'd-none'} `} >
                    <div className={`${styles.container_botton} justify-content-xl-end justify-content-lg-end justify-content-md-center justify-content-center m-md-3 m-3`}>
                        <button onClick={e=>submitUpdate(e)}>اپدیت </button>
                    </div>
                  </div>
              </div>
              
        
    </div>
     
      
  )
}

export default Address