import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Index from './components/Index';
import About from './components/About';

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route exact path="/bookstore" element={<Index/>}/>
                    <Route path="/bookstore/about" element={<About/>}/>
                    {/*<Route path="/contact" element={<Contact/>}/>*/}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
