import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { editProductAction} from '../redux/actions/productActions';


const EditProductPage = () => {
    /*const distpach = useDispatch();
    //llama al reducer
    const [product, saveProduct]=useState({
        name:'',
        price:0,
        image:'',
        brand:'',
        countInStock:0,
        category:'',
        description:'',
    });
    //producto a editar
    const productEdit = useSelector(state => state.products.productEdit);


    // lleno el state automaticamente
    useEffect(()=>{
        saveProduct(productEdit);
    },[productEdit]);
    //leo los datos del formulario
    const onChangeForm = e =>{
        saveProduct({ 
            ...product, 
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
    
    const submitEditProduct = e => {
        e.preventDefault();
        distpach(editProductAction(product));
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


  </>;*/
  return <></>
};

export default EditProductPage;
