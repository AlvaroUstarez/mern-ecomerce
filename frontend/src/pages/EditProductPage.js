import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { updateProductAction , uploadImageAction, getProductDetail} from '../redux/actions/productActions';
import actionTypes from '../redux/actions/actionTypes';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { Link } from 'react-router-dom';
import { Form, Button, FormGroup, FormLabel } from 'react-bootstrap';

const EditProductPage = () => {
    
    //llama al reducer
    const [values, setValues]=useState({
        name:'',
        price:0,
        image:'',
        brand:'',
        countInStock:0,
        category:'',
        description:'',
    });

    const dispatch = useDispatch();

    const productDetail = useSelector((state) => state.productDetail);
    const { loading, error, product } = productDetail;
    
    const updateProduct = useSelector((state) => state.updateProduct);
    const {
        loading: loadingUpdate, 
        error: errorUpdate, 
        success: successUpdate,
    }=updateProduct;

    const productUploadImage = useSelector((state)=>state.productUploadImage);
    const {
        loading: loadingImage, 
        error: errorImage,
        success: successImage,
        imageUpload
    }=productUploadImage;

    const params = useParams();
    const productId = params.id;
    const navigate = useNavigate();

    


    // lleno el state automaticamente
    useEffect(()=>{
        if (successUpdate){
            dispatch({ type: actionTypes.UPDATE_PRODUCT_RESET });
            navigate('/admin/productlist');
        }
        else{
            if (!product.name || product._id !== productId) {
                dispatch(getProductDetail(productId));
            }else{
                setValues({
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    brand: product.brand,
                    category: product.category,
                    countInStock: product.countInStock,
                    description: product.description,
                  });
            }
        }

        
    }, [dispatch, product, productId, successUpdate]);

    useEffect(() => {
        if ( successUpdate) {
          setValues({ ...values, image: imageUpload });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [successUpdate]);


    //leo los datos del formulario
   /* const onChangeForm = e =>{
        setValues({ 
            ...values, 
            [e.target.name]:e.target.value,
            [e.target.price]:e.target.value,
            [e.target.image]:e.target.value,
            [e.target.brand]:e.target.value, 
            [e.target.countInStock]:e.target.value,
            [e.target.category]:e.target.value,
            [e.target.description]:e.target.value,
        })
    };*/
    const uploadFileHandler = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('image', file);
        dispatch(uploadImageAction(formData));
      };
    
      const submitEditProduct = (e) => {
        e.preventDefault();
        dispatch(
            updateProductAction({
            ...values,
            _id: productId,
          })
        );
      };

    //se aplica destructuring
    const {name, price, image, brand,
       countInStock, category, description}=product;
    
    /*const submitEditProduct = (e) => {
        e.preventDefault();
        distpach(updateProductAction(values));
        //direccionar al componente principal
        //history.push('/');
    };*/
 
    return (
        <>
          <Link to='/admin/productlist' className='btn btn-light my-3'>
            Regresar
          </Link>
          <FormContainer>
            <h1>Editar Producto</h1>
            {loadingUpdate && <Loader />}
            {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
            {loading ? (
              <Loader />
            ) : error ? (
              <Message variant='danger'>{error}</Message>
            ) : (
              <Form onSubmit={submitEditProduct}>
                <FormGroup controlId='name' className='mb-2'>
                  <FormLabel>Nombre</FormLabel>
                  <Form.Control
                    type='name'
                    placeholder='Ingrese su nombre'
                    value={values.name} 
                    onChange={(e) =>
                      setValues({ ...values, name: e.target.value })
                    }></Form.Control>
                </FormGroup>
                <FormGroup controlId='price' className='mb-2'>
                  <FormLabel>Precio</FormLabel>
                  <Form.Control
                    type='number'
                    placeholder='Ingrese el precio'
                    value={values.price}
                    onChange={(e) =>
                      setValues({ ...values, price: e.target.value })
                    }></Form.Control>
                </FormGroup>
                <FormGroup controlId='image' className='mb-2'>
                  <FormLabel>Foto</FormLabel>
                  <Form.Control
                    className='mb-3'
                    type='text'
                    placeholder='Ingrese la url de la imagen'
                    value={values.image}
                    onChange={(e) =>
                      setValues({ ...values, image: e.target.value })
                    }></Form.Control>
                  <Form.Control
                    type='file'
                    label='Seleccionar imagen'
                    onChange={uploadFileHandler}></Form.Control>
                  {loadingImage && <Loader />}
                  {errorImage && (
                    <Message variant='danger'>{errorImage}</Message>
                  )}

                </FormGroup>
                <FormGroup controlId='brand' className='mb-2'>
                  <FormLabel>Marca</FormLabel>
                  <Form.Control
                    type='text'
                    placeholder='Ingrese la marca'
                    value={values.brand}
                    onChange={(e) =>
                      setValues({ ...values, brand: e.target.value })
                    }></Form.Control>
                </FormGroup>
                <FormGroup controlId='countInStock' className='mb-2'>
                  <FormLabel>Cantidad en Stock</FormLabel>
                  <Form.Control
                    type='number'
                    placeholder='Ingrese la cantidad'
                    value={values.countInStock}
                    onChange={(e) =>
                      setValues({ ...values, countInStock: e.target.value })
                    }></Form.Control>
                </FormGroup>
                <FormGroup controlId='category' className='mb-2'>
                  <FormLabel>Categoría</FormLabel>
                  <Form.Control
                    type='text'
                    placeholder='Ingrese la categoría'
                    value={values.category}
                    onChange={(e) =>
                      setValues({ ...values, category: e.target.value })
                    }></Form.Control>
                </FormGroup>
                <FormGroup controlId='description' className='mb-3'>
                  <FormLabel>Categoría</FormLabel>
                  <Form.Control
                    type='text'
                    placeholder='Ingrese la descripción'
                    value={values.description}
                    onChange={(e) =>
                      setValues({ ...values, description: e.target.value })
                    }></Form.Control>
                </FormGroup>
                <Button type='submit' variant='primary'>
                  Guardar Cambios
                </Button>
              </Form>
            )}
          </FormContainer>
        </>
      );
    };
    

export default EditProductPage;
