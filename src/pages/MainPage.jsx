import React from 'react';
import { BookList, CartItems } from '../Components';
import Header from '../Components/Header/Header';
import classes from './header.module.scss';

const MainPage = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main role="main" className="container">
        <BookList />
      </main>
      <CartItems/>
    </>
  );
};

export default MainPage;
