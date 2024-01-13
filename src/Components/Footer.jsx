import React from 'react'
import { Row, Col } from 'react-bootstrap';


function Footer() {
  return (
    <div className='' >
      <div className='bg-dark ps-4 pt-5'>
        <Row className='pb-5'>
          <Col className='pt-2 ps-4' lg={3} md={3} sm={3}>
            <h3 className='fw-bold' style={{overflowY:'hidden'}} >Daily Cart</h3>
            <p className='text-light mt-3' style={{ fontSize: '10px' }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </Col>

          <Col lg={3} md={3} sm={3}>
            <span className='text-white pt-2 fs-5'>Links</span>
            <div className='mt-3 '>
              <a className='' style={{ textDecoration: 'none', color:'yellowgreen' }} href="">
                Home
              </a>
              <br />
              <a className='' style={{ textDecoration: 'none',color:'yellowgreen' }} href="">
                Cart
              </a>
              <br />
              <a className='' style={{ textDecoration: 'none',color:'yellowgreen' }} href="">
                Wish List
              </a>
            </div>
          </Col>

          <Col lg={3} md={3} sm={3}>
            <span className='text-white pt-2 fs-5'>Guides</span>
            <div className='mt-3 '>
              <a className='text-white' style={{ textDecoration: 'none' }} href="">
                React
              </a>
              <br />
              <a className='text-white' style={{ textDecoration: 'none' }} href="">
                React Bootstrap
              </a>
              <br />
              <a className='text-white' style={{ textDecoration: 'none' }} href="">
                Routing
              </a>
            </div>
          </Col>

          <Col lg={3} md={3} sm={3}>
            <span className=' fs-4' style={{color:'yellowgreen'}}>
              <b>Contact Us</b>
            </span>
            <br />
            <input type='text' className='w-50 mt-2 rounded ' placeholder='enter email' />
            <br />
            <button className=' bg-secondary shadow-lg w-50 mt-2 btn' style={{color:'yellowgreen',textDecoration:'none'}}>
              Send
            </button>
            <br />
          
          </Col>
        </Row>

    
      </div>
    </div>
  )
}

export default Footer
