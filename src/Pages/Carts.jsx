import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart,removeAll } from '../Redux/slice/cartSlice';
import { Row, Col, Button, Card, Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import './Forfooter.css'

function Carts() {
  const dispatch = useDispatch();
  const myCart = useSelector(state => state.cartReducer);
  
  const [totalVal,setTotalVal] = useState(0)

  const navigate = useNavigate()  

  useEffect(()=>{
    if(myCart.length>0){
      setTotalVal(myCart.map(i=>i.totalPrice).reduce((a,b)=>a+b))
    }else{
      setTotalVal(0)
    }
  },[myCart])


  const orderPlacing = () => {
    alert('Orders palced successfully' )
    dispatch(removeAll(myCart))
    navigate('/')
  }


  return (
    <div className='for-setting-footer' >
    <Header></Header>
      <Row className='p-3'>
        {myCart.length > 0 ? (
          <Col sm={8} md={8} lg={8}>
            <Table striped variant='secondary' hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {myCart.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        height={'50px'}
                        width={'50px'}
                      />
                    </td>
                    <td>{item.quantity}</td>
                    <td>{item.totalPrice}$</td>
                    <td>
                      <Button 
                      style={{backgroundColor:'transparent'}}
                        onClick={() => {
                          dispatch(removeFromCart(item));
                        }}
                        variant='secondary'
                      >
                        <i style={{ color: 'red' }} className='fa-solid fa-trash'></i>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <div className='d-flex float-end' >
            <Button className='btn btn-warning me-3' onClick={()=>{
              dispatch(removeAll(myCart)),
              setTotalVal(0)
            }} >Empty Cart</Button>
            <Link to={'/'} className='btn btn-secondary' >Shop More</Link>
            </div>
          </Col>
        ) : (
          <Col sm={12} md={12} lg={12}>
            <h2 className='text-white'>No Items in the cart</h2>
          </Col>
        )}
        <Col  sm={4} lg={4} md={4} className='text-cente' >
        <div className='bg-light shadow rounded p-1 d-flex flex-column justify-content-between'  >
        <div className='p-3' >
        
          <span>Total products : {myCart.length}</span>
          <br />
          <span>Total amount &nbsp; : {totalVal} </span>
          </div>
      
          <div className='text-center p-3' >
          <hr className='shadow' />
          <button onClick={()=>{orderPlacing()}} className='btn btn-success w-75 shadow ' >Checkout</button>
          </div>
        </div>
        </Col>
      </Row>
    </div>
  );
}

export default Carts;
