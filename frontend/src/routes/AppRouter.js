import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from '../components/Header';
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';

const AppRouter = () => {
    
    return (
        <Router>
            <Header/>
            <main className='py-3'>
                <Container>
                    <Routes>
                        <Route path='/' element={<HomePage/>}/>
                        <Route path='/product/:id' element={<ProductPage/>}/>
                    </Routes>
                </Container>
            </main>
        </Router>
    );
};

export default AppRouter;