import React, { useEffect } from "react";
import { Col, Row} from 'react-bootstrap';
import { useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { ListProducts } from '../redux/actions/productActions';
import Product from "../components/Product";

const HomePage = () => {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

    const params = useParams();
    const { keyword } = params;
    const pageNumer = params.pageNumer || 1;
    
    useEffect(() => {
        dispatch(ListProducts(keyword, pageNumer));
    }, [dispatch, keyword, pageNumer]);

    return (
        <>
        <h1>Últimos Productos</h1>
        {loading ? (
            <Loader/>
        ): error ? (
            <Message variant= 'danger'>{error}</Message>
        ): (
            <>
            <Row>
                {products.map((product) => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        { <Product product = {product}/> }
                    </Col>
                ))}
            </Row>
            </>
        )}
        </>
    )    
};

export default HomePage;