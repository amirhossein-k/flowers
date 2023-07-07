import { style } from "@mui/system";
import React from "react";
import { useState } from "react";
import { useCallback } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { redirect } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbarr from "../../components/navbar/Navbarr";
import Address from "../../components/profile/address/Address";
import History from "../../components/profile/history/History";
import Information from "../../components/profile/information/Information";
import Sidebar from "../../components/sidebar/Sidebar";

import styles from './profile.module.scss'

const Profile = () => {
  const [open,setOpen] = useState([<Information/>])
  const openHandlerCallback =useCallback((title)=>{
    switch(title){
      case 'Address':
        return setOpen(<Address/>)
      case "Information":
        return setOpen(<Information/>)
      case "History":
        return setOpen(<History/>)
      case "Home":
      return window.location.replace('/')
    }
    // setOpen(component)
  },[open])
  return (

    <Container fluid style={{margin:"0 !important",padding:"0 !important"}}>
      <header>
          <Navbarr/>
      </header>

      <main style={{backgroundColor: '#ededed',    marginBottom: 10 ,minHeight: "492px"}} className="row">
        <section style={{minHeight: "492px"}}>
        
          <div className={`${styles.profile_container} row h-100`} dir='rtl'>
            <div className='col-12 col-lg-2'>
              <Sidebar openHandlerCallback={openHandlerCallback}/>
              
            </div>
            <div className='col-12 col-lg-10 my-2' style={{paddingTop:25,paddingBottom:25}}>
              {open && open}
            </div>
          </div>
        </section>
  
      </main>
      <footer >
        <Footer/>
      
      </footer>
    </Container>
  );
};

export default Profile;
