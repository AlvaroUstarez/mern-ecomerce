import React, { useEffect } from "react";
//import { Col, Row} from 'react-bootstrap';
import { useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import Message from '../components/Message';
//import Product from "../components/Product";
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

        {loading ? (
            <Loader/>
        ): error ? (
            <Message variant= 'danger'>{error}</Message>
        ): (
            <>
                <div className="card">
                  <h1 className="card-header">{product.name}</h1>
                  <div className="card-body">
                    <h2>{product.price}</h2>
                    <h6>{product.description}</h6>
                  </div>
                </div>
            </>
        )}
      
  </>);
};

export default ProductPage;
