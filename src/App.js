import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppHeader from './Components/Header';
import About from './About';
import Product from './Product';
import Footer from './Components/FooterComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const App = () => {


  return (

    <div>
      {/* top head  nav bar*/}
      <div pt-5 pb-5 mb-5><p className='text-center'>Header</p></div>
      <Router>
        <AppHeader />
        
        <Routes>
          <Route path='/product' element={<Product />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </Router>   {/* end part */}
    </div>

  );
};

export default App;











