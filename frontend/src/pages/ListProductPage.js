import React, { useEffect } from "react";
import { useDispatch, useSelector} from 'react-redux';
import { useParams , useNavigate} from 'react-router-dom';
import Message from '../components/Message';
import { listProducts, createProductAction,
     deleteProductAction } from '../redux/actions/productActions';
import actionTypes from '../redux/actions/actionTypes';
import Paginate from '../components/Paginate';
import Loader from '../components/Loader';
import {LinkContainer} from 'react-router-bootstrap';
import { Table, Button} from 'react-bootstrap';

const ListProductPage = () => {

    
    const params = useParams();
    const navigate = useNavigate();
    const pageNumber = params.pageNumber || 1;

    const productList = useSelector((state) => state.productList);
    const { loading, error, products, page, pages } = productList;

    const deleteProduct = useSelector((state) => state.deleteProduct);
    const {
      loading: loadingDelete,
      error: errorDelete,
      success: successDelete,
    } = deleteProduct;

    const createProduct = useSelector((state) => state.createProduct);
    const {
      loading: loadingCreate,
      error: errorCreate,
      success: successCreate,
      product: createdProduct,
    } = createProduct;

    //const userLogin = useSelector((state) => state.userLogin);
    //const {userInfo} = userLogin;
    const userLogger = useSelector((state) => state.userLogger);
    const { userAuth } = userLogger;
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        if (!userAuth.isAdmin) {
          navigate('/login');
        }
        if (successCreate) {
          dispatch({ type: actionTypes.CREATE_PRODUCT_RESET });
          navigate(`/admin/product/${createdProduct._id}/edit`);
        } else {
          dispatch(listProducts('', pageNumber));
        }
      }, [
        dispatch,
        navigate,
        userAuth,
        successDelete,
        successCreate,
        createdProduct,
        pageNumber,
      ]);

    const createProductHandler= () => {
        dispatch(createProductAction());
      };
    const deleteProductHandler = (productId) => {

        // fijarse como hacer para sweetalert 
        if (window.confirm('¿Desea eliminar este producto?')) {
            dispatch (deleteProductAction(productId));
        }
    }

    return (
        <>
        <h1>Productos</h1>
        <Button type="submit" onClick={createProductHandler}>
        <i className='fas fa-plus'></i>Nuevo Producto</Button>
        {loadingDelete && <Loader />}
        {errorDelete && <Message variant='danger'>{errorDelete}</Message>}
        {loadingCreate && <Loader />}
        {errorCreate && <Message variant='danger'>{errorCreate}</Message>}
        {loading ? (
        <Loader />
        ): error ? (
            <Message variant= 'danger'>{error}</Message>
        ): (
            <>
           
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
                    {products.map((product) => {
                    return (
                        <tr key={product._id}>
                        <td>{product._id}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.category}</td>
                        <td>{product.brand}</td>
                        <td>
                            <LinkContainer to={`/admin/product/${product._id}/edit`}>
                                <Button>
                                    <i className='fas fa-edit'></i>
                                </Button>
                            </LinkContainer>
                            <Button
                            variant='danger' 
                            onClick={() => deleteProductHandler(product._id)}>
                            <i className='fas fa-trash'></i>
                            </Button>
                        </td> 
                        </tr>
                    );
                    })}
                   
                </tbody>
                </Table>
                <Paginate page={page} pages={pages} isAdmin={true} />
            </>
        )}
        </>
    )     
};

export default ListProductPage;