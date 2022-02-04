import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { updateProductAction , createProductAction} from '../redux/actions/productActions';


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

    const distpach = useDispatch();

    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;
    
    const productEdit = useSelector((state) => state.products.productEdit);
    const {
        loading: loadingUpdate, 
        error: errorUpdate, 
        product: productUpdate
    }=productEdit;

    const imageProduct = useSelector((state)=>state.products.imageProduct);
    const {
        loading: loadingImage, 
        error: errorImage,
        success: successUpdate,
        imageUpload
    }=imageProduct;



    


    // lleno el state automaticamente
    useEffect(()=>{
        setValues(productEdit);
    },[productEdit]);
    //leo los datos del formulario
    const onChangeForm = e =>{
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
    };

    //se aplica destructuring
    const {name, price, image, brand,
       countInStock, category, description}=product;
    
    const submitEditProduct = (e) => {
        e.preventDefault();
        distpach(updateProductAction(values));
        //direccionar al componente principal
        //history.push('/');
    };
  return <>
       <div className='container'>
           <div className='row'>
               <div>
                <h1>Editar Producto</h1>
                <form onSubmit={submitEditProduct}>
                <button
                        type="submit"
                     >Regresar</button>
                    <div>
                        <label>Nombre del producto:</label>
                        <input
                            type="text"
                            placeholder="Sample name"
                            name="name"
                            value={name}
                            onChange={onChangeForm}
                        />
                    </div>
                    <div>
                        <label>Precio del producto:</label>
                        <input
                            type="number"
                            placeholder="0"
                            name="price"
                            value={price}
                            onChange={onChangeForm}
                        />
                    </div>
                    <div>
                        <label>Imagen del producto:</label>
                        <input type="file"
                            placeholder="/images/sample.jpg"
                            name="image"
                            value={image}
                            onChange={onChangeForm} />
                        <input
                            type="file"
                            placeholder="Ningun archivo seleccionado"
                            name="file"
                        />
                    </div>
                    <div>
                        <label>Marca del producto:</label>
                        <input
                            type="text"
                            placeholder="Sample brand"
                            name="brand"
                            value={brand}
                            onChange={onChangeForm}
                        />
                    </div>
                    <div>
                        <label>Cantidad en Stock del producto:</label>
                        <input
                            type="number"
                            placeholder="0"
                            name="countInStock"
                            value={countInStock}
                            onChange={onChangeForm}
                        />
                    </div>
                    <div>
                        <label>Categoria del producto:</label>
                        <input
                            type="text"
                            placeholder="Sample category"
                            name="category"
                            value={category}
                            onChange={onChangeForm}
                        />
                    </div>
                    <div>
                        <label>Descripcion del producto:</label>
                        <input
                            type="text"
                            placeholder="SampleS descripcion"
                            name="description"
                            value={description}
                            onChange={onChangeForm}
                        />
                    </div>
                    <button
                        type="submit"
                     >Guardar Cambios</button>
                </form>
               </div>
           </div>
       </div>


  </>;
  return <></>
};

export default EditProductPage;
