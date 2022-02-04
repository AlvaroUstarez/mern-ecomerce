import React, { useEffect } from "react";
import {  Table} from 'react-bootstrap';
import { useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { listProducts } from '../redux/actions/productActions';
import { useNavigate, useHistory } from "react-router-dom";
import { createProductAction, deleteProductAction } from "../redux/actions/productActions";

const ListProductPage = () => {
    const dispatch = useDispatch();

    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

    

    const params = useParams();
    const { keyword } = params; 
    const pageNumer = params.pageNumer || 1;
    
    useEffect(() => {
        dispatch(listProducts(keyword, pageNumer));
    }, [dispatch, keyword, pageNumer]);

    const createProductHandler= () => {
        dispatch(createProductAction());
      };
    const deleteProductHandler = (productId) => {

        // fijarse como hacer para sweetalert 
        if (window.confirm('¿Está seguro de eliminar este producto?')) {
            dispatch (deleteProductAction(productId));
        }
    }
/*
    useEffect(() => {
        if (!userInfo.isAdmin) {
          navigate('/login');
        }
        if (successCreate) {
          dispatch({ type: actionTypes.PRODUCT_CREATE_RESET });
          navigate(`/admin/product/${createdProductAction._id}/edit`);
        } else {
          dispatch(listProducts('', pageNumber));
        }
      }, [
        dispatch,
        navigate,
        userInfo,
        successDelete,
        successCreate,
        createdProduct,
        pageNumber,
      ]);*/
    
    return (
        <>
        <h1>Productos</h1>
        {loading ? (
            <Loader/>
        ): error ? (
            <Message variant= 'danger'>{error}</Message>
        ): (
            <>
           <button type="submit" onClick={createProductHandler}
           >Nuevo Producto</button>
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
                                type="submit" onClick={() => deleteProductHandler(product._id)}
                            >Editar</button>
                            <button
                                type="submit"  onClick={() => deleteProductHandler(product._id)}
                               
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