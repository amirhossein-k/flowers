import React from 'react'
import { Container } from 'react-bootstrap'
import Category from '../../components/category-box/Category'
import Navbarr from '../../components/navbar/Navbarr'

const Home = () => {
  return (
    <Container fluid style={{margin:"0 !important",padding:"0 !important"}}>
        <header>
            <Navbarr/>
        </header>
        <main >
          <section className='header-img'>
            rt
          </section>
          <section className='category-box-product'>
            <Category/>
          </section>
          <section className='special-product'>
            ferfe
          </section>
          <section className='comic'>
            ferfe
          </section>
      
        </main>
        <footer>
          
        </footer>
    </Container>
  )
}

export default Home