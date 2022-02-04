import React, { useEffect } from "react";
import {  Table} from 'react-bootstrap';
import { useDispatch, useSelector} from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { createProductAction, deleteProductAction } from "../redux/actions/loginActions";
import { listUsers } from "../redux/actions/loginActions";
//import toast from 'react-hot-toast';

const ListUserPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userList = useSelector((state) => state.userList);
    const { loading, error, usuarios } = userList;

    const userLogger = useSelector((state) => state.userLogger);
    const { userAuth } = userLogger;
    

    const params = useParams();
    const { keyword } = params; 
    const pageNumer = params.pageNumer || 1;
    
    useEffect(() => {
        if (userAuth && userAuth.isAdmin) {
          dispatch(listUsers());
        } else {
          navigate('/login');
        }
      }, [dispatch, navigate, userAuth]);

   /* const createProductHandler= () => {
        dispatch(createProductAction());
      };
    const deleteProductHandler = (productId) => {

        // fijarse como hacer para sweetalert 
        if (window.confirm('¿Está seguro de eliminar este producto?')) {
            dispatch (deleteProductAction(productId));
        }
    }*/
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
        <h1>USUARIOS</h1>
        {loading ? (
            <Loader/>
        ): error ? (
            <Message variant= 'danger'>{error}</Message>
        ): (
            <>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>NOMBRE</th>
                    <th>EMAIL</th>
                    <th>ADMIN</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((user, index) => {
                    return (
                        <tr key={user._id}>
                        <td>{user._id}</td>
                        <td>{user.name}</td>
                        <td>
                          <a href={`mailto:${user.email}`}>{user.email}</a>
                        </td>
                        <td>
                          {user.isAdmin ? (
                            <i className='fas fa-check' style={{ color: 'green' }}></i>
                          ) : (
                            <i className='fas fa-times' style={{ color: 'red' }}></i>
                          )}
                        </td>
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

export default ListUserPage;