import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { Row,Col, Container } from 'react-bootstrap';
import { addTo } from '../Redux/slice/wishSlice';
import { addToCart } from '../Redux/slice/cartSlice';
import Header from '../Components/Header';
import './Forfooter.css'
function View() {

  

  const {id} = useParams()
  const dispatch = useDispatch()
  const [myProduct,setMyproduct] = useState({})
  
  
  useEffect(()=>{
    const aProduct = JSON.parse(sessionStorage.getItem("allProducts"))
    setMyproduct(aProduct.find(i=>i.id==id))
  },[])


  
  const wishlist = useSelector(state=>state.wishReducer)
  
  const handleWishlist = (myProduct) =>{
    
    const existingProduct = wishlist.find(i=>i.id == myProduct.id)
    if(existingProduct){
      alert("already exist")
    }
    else{
      dispatch(addTo(myProduct))
    }
  }

  // const cartProduct = useSelector(state=>state.cartReducer)
  //   console.log(cartProduct);
  



  return (
    <div className='for-setting-footer' >
    <Header></Header>
  <Container  >
    <Row className='mt-4 ' >
     <Col  sm={4} md={4} lg={4} >
     <img className='border border-secondary'  src={myProduct.thumbnail} alt="" width={'100%'} height={'100%'} />
     </Col>
     <Col sm={1} md={1} lg={1} ></Col>
     <Col sm={7} md={7} lg={7} >
      <span className='fs-4'>  {myProduct.title} </span>
      <br />
      <span className='' style={{fontSize:'13px'}} > {myProduct.brand} </span>
      <br />
      <br />
      <span style={{fontSize:'13px'}} >{myProduct.description}</span>  
      <br />
      <br />
      
      <span>Price : ${myProduct.price}</span>
     </Col>
      </Row>
      </Container>
      <div className='d-flex justify-content-around p-5'> 
        <button onClick={()=>{handleWishlist(myProduct)}} className='btn btn-outline-light btn-secondary w-25 me-3' style={{color:'yellowgreen'}} > <i style={{color:'red'}} className="fa-solid fa-heart"></i> Add to list</button>
        <button onClick={()=>{dispatch(addToCart(myProduct))}} className='btn  btn-outline-light btn-secondary w-25' style={{color:'yellowgreen'}} > <i style={{color:'white'}} className="fa-solid fa-cart-shopping me-2"></i>Add to cart</button>
        </div>
     </div>
     )
}

export default View
