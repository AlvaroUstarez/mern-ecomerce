import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from '../components/Header';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ProfilePage from '../pages/ProfilePage'
import ProductPage from '../pages/ProductPage';
import ListProductPage from '../pages/ListProductPage';
import EditProductPage from '../pages/EditProductPage';

const AppRouter = () => {
    
    return (
        <Router>
            <Header/>
            <main className='py-3'>
                <Container>
                    <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/Login' element={<LoginPage/>}/>
                    <Route path='/Register' element={<RegisterPage/>}/>
                    <Route path='/profile' element={<ProfilePage/>}/>                         
                    <Route path='/EditProductPage' element={<EditProductPage/>}/>
                    <Route path='/ListProductPage' element={<ListProductPage/>}/>
                    <Route path='/product/:id' element={<ProductPage/>}/>
                    </Routes>
                </Container>
            </main>
        </Router>
    );
};

export default AppRouter;