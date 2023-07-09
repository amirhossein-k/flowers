import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styles from './address.module.scss'
const Address = () => {

  const userLogin = useSelector(state=>state.userLogin)
  const {error,loading,userInfo} = userLogin

  const [edite,setEdite]= useState(false)
  const [address,setAddress]= useState('')
  const [zipCode,setZipCode]= useState('')


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
                                    <div className={`col-8`}>{item.title}</div>
                                  </div>
                                </div>
                                <div className={`col ${!edite ? 'd-flex' : 'd-none'}`} >
                                  {(()=>{
                                        switch(item.title){
                                           
                                            case 'ادرس':
                                              return  userInfo.detail[0].address.location
                                            case 'کدپستی':
                                              return  userInfo.detail[0].address.zipcode
                                           
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
                                              className={`${styles.effect_19} w-100`}  value={address}  onChange={e=>setAddress(e.target.value)}
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
              </div>
    </div>
     
      
  )
}

export default Address