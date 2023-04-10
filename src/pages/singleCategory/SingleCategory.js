import React from 'react'
import { Container } from 'react-bootstrap'
import Footer from '../../components/footer/Footer'
import Navbarr from '../../components/navbar/Navbarr'
import HeaderCategory from '../../components/single-category/header/HeaderCategory'
import ProductCard from '../../components/single-category/productCard/ProductCard'
import Ask from '../../components/single-category/ask/Ask'

const SingleCategory = () => {
  return (
    <Container fluid style={{margin:"0 !important",padding:"0 !important"}}>
        <header>
            <Navbarr/>
        </header>
        <main style={{backgroundColor: '#ededed',    marginBottom: 10}} >
          <section className='header-img'>
            <HeaderCategory/>
          </section>
          
          <section className='product-card'>
            <ProductCard/>
          </section>
          <section className='ask'>
              <Ask/>
          </section>
      
        </main>
        <footer >
          <Footer/>
          
        </footer>
    </Container>
  )
}

export default SingleCategory