import React, { useEffect } from "react";
import { Col, Row} from 'react-bootstrap';
import { useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { listProducts } from '../redux/actions/productActions';
import Product from "../components/Product";
import { getProductDetail } from "../redux/actions/productActions";
export const ProductPage = () => {
    
    const dispatch = useDispatch();
    const productDetail = useSelector((state) => state.productDetail);
    const { loading, error, product } = productDetail;

    const params = useParams();
    const { id } = params; 
    //const pageNumer = params.pageNumer || 1;
    
    useEffect(() => {
        dispatch(getProductDetail(id));
    }, [dispatch, id]);

    console.log(product);

  return (<>
  
  <h1>Últimos Productos</h1>
        {loading ? (
            <Loader/>
        ): error ? (
            <Message variant= 'danger'>{error}</Message>
        ): (
            <>
            <Row>
                {/* {products.map((product) => (
                    
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        { <Product product = {product}/> }
                    </Col>
                ))} */}
            </Row>
            </>
        )}
      
  </>);
};

export default ProductPage;
