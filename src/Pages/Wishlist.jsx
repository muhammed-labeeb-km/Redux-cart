import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row,Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {deleteFrom} from '../Redux/slice/wishSlice';
import { addToCart } from '../Redux/slice/cartSlice';
import Header from '../Components/Header';
import './Forfooter.css'
function Wishlist() {

  const wishlist = useSelector(state=>state.wishReducer)
  // console.log(wishlist);

  const dispatch = useDispatch()

  const removeFromWish = (id) => {
    // console.log(id);
    dispatch(deleteFrom(id))
  }


  const handleWishForCart = (product) => {
    dispatch(deleteFrom(product.id))
    dispatch(addToCart(product))
  }


  return (
    <div className='for-setting-footer' >
    <Header></Header>
      <Row>
      {wishlist.length>0 ? wishlist.map(i=>(<Col key={i.id} className='p-5' sm={6} md={4} lg={3}>
      <Card  style={{ width: '18rem' }}>
      <Card.Img variant="top" src={i.thumbnail} height={'200px'} />
      <Card.Body>
        <Card.Title style={{overflowY:'hidden'}}>{i.title.length>20?`${i.title.slice(0,20)}...`:i.title}</Card.Title>
      </Card.Body>
      <div className=' p-3 d-flex  justify-content-evenly'>
      <button onClick={()=>{handleWishForCart(i)}} className="btn btn-dark shadow w-25"> <i className='fa-solid text-success fa-cart-plus'></i>  </button>   
      <button onClick={()=>{removeFromWish(i.id)}} className="btn btn-dark shadow w-25 "> <i className='fa-solid text-danger fa-heart-circle-minus'></i>  </button>
    </div>
    </Card>
 
    </Col>)) :
    <h3 className='text-white text-center' >No Items in your wishlist</h3>
  }
      
      </Row>
    </div>
  )
}

export default Wishlist
