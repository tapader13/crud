import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Components/Home';
import AddBook from '../Components/AddBook';
import ShowBook from '../Components/ShowBook';
import Navbar from '../header/Navbar';
import Error from '../Components/Error';
import EditBook from '../Components/EditBook';
import Footer from '../Components/Footer';
function Router() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/addBook' element={<AddBook />} />
          <Route path='/showBook' element={<ShowBook />} />
          <Route path='/editBook' element={<EditBook />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default Router;
