import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { fetchProducts, navigateToNext, navigateToPrev } from '../Redux/slice/ProductSlice';
import { Row,Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import './Forfooter.css'
function Home() {

 
  const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchProducts());
    }, []);

    
    const {allProducts,loading,error,prdctPerPage,currentPage} = useSelector(state=>state.productReducer)
    const totalPage = Math.ceil(allProducts.length/prdctPerPage)
    const lastProductIndex = (currentPage * prdctPerPage)
    const firstProductIndex = lastProductIndex - prdctPerPage
    const visibleProductCard = allProducts.slice(firstProductIndex,lastProductIndex)
    // console.log(allProducts);

    const handlePrevPage = () => {
      if(currentPage !=1){
        dispatch(navigateToPrev())
      }
    }
    const handleNextPage = () => {
      if(currentPage != totalPage){
        dispatch(navigateToNext())
      }
    }
    

  return (
    <div className='for-setting-footer'  >
    <Header insideHome />
       {
        loading?
        <div className=' p-3 text-center text-white'><h3><Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>Loading...</h3></div>
        : <Row>
        {
          allProducts.length>0 ?

          visibleProductCard.map((i,indx)=>(<Col key={indx} className='p-5' sm={6} md={4} lg={3}>
          <Card style={{ width: '18rem' }}  >
            <Card.Img variant="top" src={i.thumbnail} height={'200px'} />
            <Card.Body>
                <Card.Title className='text-center' style={{overflowY:'hidden'}}>{i.title.length>20?`${i.title.slice(0,20)}...`:i.title}</Card.Title>
                <div className='text-center'>
                <Link  to={`/views/${i.id}`} style={{textDecoration:'none',color:'greenyellow'}}>
                View More
                </Link>
                </div>
            </Card.Body>
          </Card>
          </Col>)):
          <div className='text-center p-3'>
          <h1>No Products Found</h1>
          </div>
        }      
        </Row>
       }
       <div className="d-flex justify-content-center mt-5">
       <button onClick={()=>{handlePrevPage()}} style={{cursor:'pointer'}} className='btn' ><i className='fa-solid fa-backward px-2' ></i></button>
       <span className='mx-3 fs-5 ' >{currentPage} of {totalPage}</span>
       <button onClick={()=>{handleNextPage()}} style={{cursor:'pointer'}} className='btn' ><i className='fa-solid fa-forward px-2' ></i></button>
       </div>
    </div>
  )
}

export default Home
