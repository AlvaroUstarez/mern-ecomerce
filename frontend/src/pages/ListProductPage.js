import React, { useEffect } from "react";
import {  Table} from 'react-bootstrap';
import { useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { listProducts } from '../redux/actions/productActions';
import { useNavigate, useHistory } from "react-router-dom";

const ListProductPage = () => {
    const dispatch = useDispatch();
    let history = useHistory();
    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

    const params = useParams();
    const { keyword } = params; 
    const pageNumer = params.pageNumer || 1;
    
    useEffect(() => {
        dispatch(listProducts(keyword, pageNumer));
    }, [dispatch, keyword, pageNumer]);

    const redirect = () => {
        history.push('/CreateProductPage')
    }
    return (
        <>
        <h1>Productos</h1>
        {loading ? (
            <Loader/>
        ): error ? (
            <Message variant= 'danger'>{error}</Message>
        ): (
            <>
           <button type="submit" onClick={ redirect}>Nuevo Producto</button>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>NOMBRE</th>
                    <th>PRECIO</th>
                    <th>CATEGORIA</th>
                    <th>MARCA</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => {
                    return (
                        <tr key={product._id}>
                        <td>{product._id}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.category}</td>
                        <td>{product.brand}</td>
                        <td>
                                <button
                                type="submit"
                            >Editar</button>
                            <button
                                type="submit"
                            >Eliminar</button>
                        </td>
                        </tr>
                    );
                    })}
                   
                </tbody>
                </Table>
            </>
        )}
        </>
    )    
};

export default ListProductPage;