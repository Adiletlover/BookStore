import React, { useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setIsOpen } from '../../store/reducers/cartItems';
import Loader from '../Loader/Loader';
import classes from './styles.module.scss';

const CartItems = () => {
  const { items, isItemLoading, isItemError } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = 'auto');
  }, []);

  const renderItmes = (el, idx) => {
    const { title, count, total, id } = el;
    return (
      <tr key={`item-${id}`}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>{total}</td>
        <td>
          <Button variant="outline-success my-1">
            <box-icon type="solid" name="plus-circle"></box-icon>
          </Button>
          <Button variant="outline-warning my-1">
            <box-icon type="solid" name="minus-circle"></box-icon>
          </Button>
          <Button variant="outline-danger my-1">
            <box-icon name="trash"></box-icon>
          </Button>
        </td>
      </tr>
    );
  };
  return (
    <>
      <div onClick={() => dispatch(setIsOpen(false))} className={classes.layout}>
        <aside className={classes.aside}>
          <h2>Your Order (Cart)</h2>
          {isItemError && isItemError}

          {isItemLoading ? (
            <Loader />
          ) : !isItemError && !isItemLoading && items.length === 0 ? (
            <div className={classes.alert}>Nothing</div>
          ) : (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>№</th>
                  <th>Item</th>
                  <th>Count</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>{items.map(renderItmes)}</tbody>
            </Table>
          )}
        </aside>
      </div>
    </>
  );
};

export default CartItems;
