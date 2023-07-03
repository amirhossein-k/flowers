import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from "@mui/icons-material/Home";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import StoreIcon from "@mui/icons-material/Store";
import styles from './sidebar.module.scss'
import { NavLink } from 'react-router-dom';
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
const Sidebar = () => {
    const menuItem = [
        {
          path: "/dashboard",
          name: "dashboard",
          icon: <DashboardIcon className={styles.icon} />,
        },
        {
            path: "/dashboard/products",
            name: "Product",
            icon: <StoreIcon className={styles.icon} />,
        },
        {
            path: "/dashboard/products/new",
            name: "New Post",
            icon: <NoteAltIcon className={styles.icon} />,
        },
        {
            path: "/",
            name: "Site",
            icon: <HomeIcon className={styles.icon} />,
        },
          
    ]
  return (
    // <Container fluid style={{margin:"0 !important",padding:"0 !important" ,height:"100%"}}>
        
    // </Container>
    <div className={styles.sidebar}>
        <div className={`row ${styles.center}`} style={{margin:"0 !important" ,'--bs-gutter-x': '0rem'}}>
            <ul>
                {menuItem.map((item,index)=>(
                    <li key={index} id={item.name}>
                        <NavLink to={item.path} className={styles.link}>
                            <div className={styles.icon}>{item.icon}</div>
                            <div className={styles.link_text}>
                                {item.name}
                            </div>
                        </NavLink>
                        <ReactTooltip anchorId={item.name} place="bottom" content={item.name} className='d-xxl-none d-xl-none d-lg-none'/>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Sidebar