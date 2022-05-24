import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from './components/Index';
import About from './components/About';

const App = () => {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Index/>}/>
                    <Route path="/bookstore/about" element={<About/>}/>
                    {/*<Route path="/contact" element={<Contact/>}/>*/}
                </Routes>
            </Router>
        </div>
    );
}

export default App;
