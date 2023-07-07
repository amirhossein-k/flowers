import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { useSelector } from 'react-redux'
import { productContext } from '../../../App'
import styles from './informtion.module.scss'
const Information = () => {
    const [productCon , setProductCon] = useContext(productContext)
    const userLogin = useSelector(state=>state.userLogin)
    const {error,loading,userInfo} = userLogin
    console.log(userInfo,'user')

    const [edite,setEdite]= useState(false)

    const items = [
        {
            "title": 'نام'
        },
        {
            "title": 'نام خانوادگی'
        },
        {
            "title": 'شماره تماس'
        },
        {
            "title": 'ایمیل'
        },
        {
            "title": 'رمز'
        },
    ]
  return (
    <div className={`row h-100 position-relative ${styles.information_container}  g-4 `} dir='rtl'>
        <div className={`col-12  ${styles.edite} `} > <div className={`${edite ? styles.cancel : styles.normal}`}  onClick={e=>setEdite(!edite)}> {edite ? 'انصراف' : "ویرایش اطلاعات"}</div></div>
        {/* item 1 */}
        {
            userInfo && items.map((item,index)=>{
                return(
                    <div className='col-12 col-lg-7'>
                        <div className={`row ${styles.item}`}>
                            <div className={`col-3 ${styles.item_title}`}>{item.title}</div>
                            <div className='col-5 col-lg-4 col-md-4 '>
                                <div className='row'>
                                    <div className={`col-12 ${styles.item_child} ${!edite ? 'd-flex' : 'd-none'}`}>{
                                    (()=>{
                                        switch(item.title){
                                            case 'نام':
                                             return   userInfo.name
                                            case 'نام':
                                              return  userInfo.name
                                            case 'شماره تماس':
                                              return  userInfo.phone_number
                                            case 'ایمیل':
                                              return  userInfo.email;
                                            case 'رمز':
                                              return  'haha';
                                            case 'نام خانوادگی':
                                             return   userInfo.detail[0].family
                                             default:
                                                return 'ggg'
                                        }
                                    })()
                                    }</div>
                                    <div className={`col-12 ${styles.item_child} ${edite ? 'd-flex' : 'd-none'}`}>
                                            <input className={`${styles.effect_19}`} type="text" placeholder=""/>
                                            <label> {item.title}</label>
                                            <span className={`${styles.focus_border}`}>
                                                <i></i>
                                            </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }


        
    </div>
  )
}

export default Information