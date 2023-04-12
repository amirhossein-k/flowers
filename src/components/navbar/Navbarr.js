import React, { useState,useEffect } from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import './navbar.css'
const Navbarr = () => {

  const [navClose,setNavClose]=useState(true)
// console.log(navClose)
const[isOpen,setIsOpen]=useState(true)


useEffect(()=>{
  const navv = document.querySelector('.navbar-toggler')
  const close = document.querySelector('.close')
  

  const u =navv.childNodes
  const u_copy = u[0].cloneNode(true)
  const ii = navv.cloneNode(true)
  ii.style.backgroundColor="blue"
  
//   ii.append(u_copy)

//  close.append(ii)


//   console.log(ii)
},[])

useEffect(() => {
  console.log(navClose)
}, [navClose]);
  return (
    
    <Navbar expand='lg' dir='ltr'>
      {/* <Container> */}
      <Navbar.Brand>
      <Nav className='left-nav'>
            <Nav.Link href="#home"><i className="bi bi-cart"></i></Nav.Link>
            <Nav.Link href="#home"><i className="bi bi-person"></i></Nav.Link>
            <Nav.Link href="#home"><i className="bi bi-search"></i></Nav.Link>
          </Nav>
      </Navbar.Brand>
      <Nav className={`right-nav d-none d-lg-flex `} >
            <Nav.Link href="#home">خرید گل</Nav.Link>
            <Nav.Link href="#home">مناسبت ها</Nav.Link>
            <Nav.Link href="#home">مجله</Nav.Link>
          </Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      
        <Navbar.Collapse id="basic-navbar-nav" >
        <span className='close'dir='rtl'>
          <i>منو</i>
          <i className="bi bi-x-lg close" ></i>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='close-toggle'/>

        </span>
      <Nav className='d-flex d-lg-none'>
       <Nav.Link href="#home">مجله</Nav.Link>
       <Nav.Link href="#home">ddd</Nav.Link>
       <Nav.Link href="#home">ddd</Nav.Link>

      </Nav>
    </Navbar.Collapse>

        {/* </Container> */}
    </Navbar>
    
    )
}

export default Navbarr