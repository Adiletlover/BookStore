import React from 'react';
import { useSelector } from 'react-redux';
import { BookList, CartItems } from '../Components';
import Header from '../Components/Header/Header';
import classes from './header.module.scss';

const MainPage = () => {
  const { isOpen } = useSelector((state)=> state.cartReducer)
  return (
    <>
      <header className={classes.header}>
        <Header />
      </header>
      <main role="main" className="container">
        <BookList />
      </main>
     {isOpen ? <CartItems/> : null}
    </>
  );
};

export default MainPage;
