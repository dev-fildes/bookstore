import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Index from './components/Index';
import About from './components/About';

const App = () => {
    return (
        <div className="App">
                <Router>
                    <Route exact path="/bookstore" component={Index}/>
                    <Route exact path="/bookstore/about" component={About}/>
                    {/*<Route path="/contact" element={<Contact/>}/>*/}
                </Router>
        </div>
    );
}

export default App;
