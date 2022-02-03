import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createProductAction} from '../redux/actions/productActions';
import { useHistory } from 'react-router-dom';

const CreateProductPage = () => {
    const distpach = useDispatch();
    
    const [name, setName ] = useState('');  
    const [price, setPrice]= useState('');
    const [image, setImage]= useState('');
    const [brand, setBrand]= useState('');
    const [countInStock, setCountInStock]= useState('');
    const [category, setCategory]= useState('');
    const [description, setDescription]= useState('');
  
    
    const submitCreateProduct =(e) => {
        e.preventDefault();
        distpach(createProductAction(name, price, image, brand, countInStock, category, description));
        //direccionar al componente principal
        //history.push('/');
    };
  return <>
       <div className='container'>
           <div className='row'>
               <div>
                <h1>Editar Producto</h1>
                <form onSubmit={submitCreateProduct}>
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
                            onChange={({target}) => setName(target.value)}
                        />
                    </div>
                    <div>
                        <label>Precio del producto:</label>
                        <input
                            type="number"
                            placeholder="0"
                            name="price"
                            value={price}
                            onChange={({target}) => setPrice(target.value)}
                        />
                    </div>
                    <div>
                        <label>Imagen del producto:</label>
                        <input type="text"
                            placeholder="/images/sample.jpg"
                            name="image"
                            value={image}
                            onChange={({target}) => setImage(target.value)} />
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
                            onChange={({target}) => setBrand(target.value)}
                        />
                    </div>
                    <div>
                        <label>Cantidad en Stock del producto:</label>
                        <input
                            type="number"
                            placeholder="0"
                            name="countInStock"
                            value={countInStock}
                            onChange={({target}) => setCountInStock(target.value)}
                        />
                    </div>
                    <div>
                        <label>Categoria del producto:</label>
                        <input
                            type="text"
                            placeholder="Sample category"
                            name="category"
                            value={category}
                            onChange={({target}) => setCategory(target.value)}
                        />
                    </div>
                    <div>
                        <label>Descripcion del producto:</label>
                        <input
                            type="text"
                            placeholder="SampleS descripcion"
                            name="description"
                            value={description}
                            onChange={({target}) => setDescription(target.value)}
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
};

export default CreateProductPage;
