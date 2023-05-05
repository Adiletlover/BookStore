import React from 'react';
import { Button, Table } from 'react-bootstrap';

const item = [
  { id: '1', total: 30, title: 'Hello', count: 1 },
  { id: '2', total: 30, title: 'Hello', count: 1 },
  { id: '3', total: 30, title: 'Hello', count: 1 },
  { id: '4', total: 30, title: 'Hello', count: 1 },
];

const CartItems = () => {
  const renderItmes = (el, idx) => {
    const { title, count, total, id } = el;
    return (
      <tr key={`item-${id}`}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>{total}</td>
        <td>
          <Button variant="outline-success mx-1">
            <box-icon type="solid" name="plus-circle"></box-icon>
          </Button>
          <Button variant="outline-warning mx-1">
            <box-icon type="solid" name="minus-circle"></box-icon>
          </Button>
          <Button variant="outline-danger mx-1">
            <box-icon name="trash"></box-icon>
          </Button>
        </td>
      </tr>
    );
  };
  return (
    <div>
      <h2>Your Order (Cart)</h2>
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
        <tbody>{item.map(renderItmes)}</tbody>
      </Table>
    </div>
  );
};

export default CartItems;
