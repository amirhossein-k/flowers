import React, { useState,useEffect, memo } from 'react'
// import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import './navbar.css'
import { useNavigate, generatePath, Link } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown, Offcanvas, Form, FormControl,Button } from 'react-bootstrap';  
import 'bootstrap/dist/css/bootstrap.min.css';  
import { useSelector,useDispatch } from 'react-redux';
import { logout } from '../../actions/userAction';
import Modals from '../modals/Modals';

const Navbarr = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [navClose,setNavClose]=useState(true)
// console.log(navClose)
const[isOpen,setIsOpen]=useState(false)

const userLogin = useSelector(state=>state.userLogin)
const {error,loading,userInfo} = userLogin

const userLogut = useSelector(state=>state.logout)
const {userlogout,errorLogout} = userLogut

const logouthandler = ()=>{
 
  dispatch(logout())
  navigate('/register')
}

  return (
    <>
    {loading && <Modals/>}
    <Navbar  expand='lg' >  
    <Container fluid >  
    <Navbar.Brand >
          <Nav className='left-nav'>
            <Link  className='nav-link' >
              <i
               className="bi bi-cart"
               onClick={()=>setIsOpen(true)}
               ></i>
             </Link>
             
            {userInfo  ? (
                 <Nav style={{ maxHeight: "200px" }} navbarScroll>
                
                 <NavDropdown
                   title={userInfo?.name}
                   id="navbarScrollingDropdown"
                 >
                   <NavDropdown.Item href="/profile" className='dropdown-a'>
                     My Profile
                   </NavDropdown.Item>
                   {
                    userInfo.isAdmin &&
                      <NavDropdown.Item href="/dashboard" className='dropdown-a'>
                      داشبورد
                    </NavDropdown.Item>
                   }
                   <NavDropdown.Divider />
                   <NavDropdown.Item onClick={logouthandler} className='dropdown-a'>
                     Logout
                   </NavDropdown.Item>
                 </NavDropdown>
               </Nav>
              
            ) : (<Link to='/register' className='nav-link'><i className="bi bi-person"></i></Link>)
            }
           
            <Link className='nav-link'><i className="bi bi-search"></i></Link>
          </Nav>
          <span onClick={(e) => navigate(`/`)}>amir</span>
      </Navbar.Brand> 
      <Nav className={`right-nav d-none d-lg-flex `} >
            <Link className='nav-link' to="/products">محصولات</Link>
            <Link className='nav-link' to="#home">مناسبت ها</Link>
            <Link className='nav-link' to="#home">مجله</Link>
      </Nav>
        {/* side bar mobile right */}
      <Navbar.Toggle aria-controls="offcanvasNavbar" />  
      <Navbar.Offcanvas  
        id="offcanvasNavbar"  
        aria-labelledby="offcanvasNavbarLabel"  
        placement="end"  
      >  
        <Offcanvas.Header closeButton>  
          <Offcanvas.Title id="offcanvasNavbarLabel">Sidebar</Offcanvas.Title>  
        </Offcanvas.Header>  
        <Offcanvas.Body>  
          <Nav className="justify-content-end flex-grow-1 pe-3">  
            <Nav.Link href="#action1">مجله</Nav.Link>  
            <Nav.Link href="#action2">Sidebar Item 2</Nav.Link>  
            <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">  
              <NavDropdown.Item href="#action3">Dropdown Item 1</NavDropdown.Item>  
              <NavDropdown.Item href="#action4">Dropdown Item 2</NavDropdown.Item>  
              <NavDropdown.Divider />  
              <NavDropdown.Item href="#action5">  
                Divided Item  
              </NavDropdown.Item>  
            </NavDropdown>  
          </Nav>  
          <Form className="d-flex">  
            <FormControl  
              type="search"  
              placeholder="Search"  
              className="me-2"  
              aria-label="Search"  
            />  
            <Button variant="outline-success">Search</Button>  
          </Form>  
        </Offcanvas.Body>  
      </Navbar.Offcanvas>  
      {/* side bar cart left */}
      {/* <div className='offcanvas_cart'></div> */}
      <div className={`sidebar_cart offcanvas_cart-end ${isOpen ? 'show' : 'hiding'}`}>
        <div className='header'>
          <span className='title'>سبد خرید</span>
          <span  className='close' onClick={()=>setIsOpen(false)}><i className="bi bi-x-lg"></i></span>
        </div>
        <div className='body'>
          <ul>
            <li>
              
              <div className='img_box'>
                <img src='https://images.unsplash.com/photo-1558001767-18747c366202?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' />
              </div>
              <div className='detail'>
                <div className='title'>ارکیده</div>
                <div className='price'>2500</div>
              </div>
             
            </li>
            <li>amir</li>
            <li>amir</li>
          </ul>
          <div className='footer'>
                <Link to='/cart'>مشاهده سبد خرید</Link>
                <Link to='/checkout'> تسویه حساب</Link>
          </div>
        </div>
      </div>
    </Container>  
  </Navbar>  
  </>
    )
}

export default memo(Navbarr)