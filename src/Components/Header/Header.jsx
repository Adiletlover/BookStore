import { Nav } from 'react-bootstrap';
import classes from './styles.module.scss';
import { useSelector } from 'react-redux';

const Header = () => {
  const { books } = useSelector((state) => state.booksReducer);
  return (
    <div>
      <Nav activeKey="/" className="justify-content-between container">
        <Nav.Item>
          <Nav.Link href="/" className={classes.logo}>
            Book Store
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="d-flex align-items-center">
          <div className={classes.icon}>
            {books.length && <div className={classes.iconAlert}>{books.length}</div>}
            <box-icon name="cart" size="40px" color={'white'}></box-icon>
          </div>
        </Nav.Item>
      </Nav>
    </div>
  );
};
export default Header;
