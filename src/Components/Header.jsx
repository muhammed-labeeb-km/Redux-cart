import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { Badge } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { filtertData } from '../Redux/slice/ProductSlice';

function Header({insideHome}) {
  const wishLength = useSelector(state=>state.wishReducer)
  // console.log(wishLength.length);
  const cartLength = useSelector(state=>state.cartReducer)
  
  const dispatch = useDispatch()

  const onFilter = (e) => {
    dispatch(filtertData(e.target.value))
  }


  return (
    <Navbar expand="lg"  className=" bg-primary w-100 sticky-top">
      <Container>
      <Link to={'/'} style={{textDecoration:'none',overflowY:'hidden'}}  >
        <Navbar.Brand className='text-white fw-bolder' > <i className="fa-solid fa-truck-fast" style={{color:'white'}}></i> Daily Cart</Navbar.Brand>
      </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-white"> 
          {insideHome && <div><Nav className='px-2' > <input onChange={(e)=>{onFilter(e)}} placeholder='Search Products ' type="text" className='rounded w-75' /> </Nav></div>}
            <Nav > <Link to={'/wishlist'} style={{textDecoration:'none'}} className='text-white'> <i className='fa-solid fa-heart text-danger'></i>  Wislist <Badge className='bg-secondary' >{wishLength.length}</Badge> </Link> </Nav>
            <Nav > <Link to={'/cart'} style={{textDecoration:'none'}} className='text-white'> <i className='fa-solid fa-cart-plus text-success'></i>  Cart <Badge className='bg-secondary' >{cartLength.length}</Badge> </Link> </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  )
}

export default Header
