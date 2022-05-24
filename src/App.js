import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './components/Index';
import About from './components/About';
import Store from './components/Store';

const App = () => {
    return (
        <div className="app">
            <Router basename="/bookstore">
                <Routes>
                    <Route index path="/" element={<Index/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/store" element={<Store/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
