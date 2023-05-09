import { message } from 'antd';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchBooks from '../../store/actions/books';
import fetchCarts from '../../store/actions/cartItems';
import Loader from '../Loader/Loader';
import BookListItem from './BookListItem';

const BookList = () => {
  const { books, booksLoading, booksError } = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
    dispatch(fetchCarts());
  }, []);

  useEffect(() => {
    if (booksError) {
      message.error(booksError, 7);
    }
  }, [booksError]);
  console.log(booksError);
  return (
    <div>
      {booksLoading ? (
        <Loader />
      ) : (
        books?.map((el) => {
          return (
            <BookListItem
              key={el.id}
              id={el.id}
              title={el.title}
              imgUrl={el.imgUrl}
              author={el.author}
              price={el.price}
            />
          );
        })
      )}
    </div>
  );
};

export default BookList;

// const dispatch = (act) => {
//   if (typeof act === 'object') {
//     // budet vypolnyat function
//     console.log(act.count + 1);
//   }
//   if (typeof act === 'function') {
//     act(dispatch);
//   }
// };

// const act = () => {
//   return {
//     count: 1,
//   };
// };
// const sec = () => {
//   return {
//     count: 2,
//   };
// };

// const actCreator = () => (dispatch) => {
//   dispatch(sec());
// };

// dispatch(act());
// dispatch(actCreator());
