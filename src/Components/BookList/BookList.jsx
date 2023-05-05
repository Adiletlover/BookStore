import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchBooks from '../../store/actions/books';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Loader from '../Loader/Loader';
import BookListItem from './BookListItem';



const BookList = () => {
  const { books, booksLoading, booksError } = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);
  return (
    <div>
      {booksLoading ? <Loader/> : booksError ? booksError : null}
      {books.length
        ? books.map((el) => {
            return <BookListItem key={el.id} id={el.id} title={el.title} imgUrl={el.imgUrl} author={el.author} price={el.price}/>
          })
        : null}
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
