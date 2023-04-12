import React from 'react'
import { Container } from 'react-bootstrap'
import Footer from '../../components/footer/Footer'
import Navbarr from '../../components/navbar/Navbarr'
import Ask from '../../components/single-category/ask/Ask'
import ProductCard from '../../components/single-category/productCard/ProductCard'
import Detail from '../../components/single-product/detail/Detail'
import Price from '../../components/single-product/price/Price'

const SingleProduct = () => {
  return (
    <Container fluid style={{margin:"0 !important",padding:"0 !important"}}>
    <header>
        <Navbarr/>
    </header>
    <main style={{backgroundColor: '#ededed',    marginBottom: 10}} >
      <section className='detail' >
       <Detail/>
      </section>
      <section className='price'>
        <Price/>
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

export default SingleProduct