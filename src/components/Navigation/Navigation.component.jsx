import { Outlet, Link } from 'react-router-dom';

import CartIcon from '../CartIcon/CartIcon.component';
import CartDropdown from '../CartDropdown/CartDropdown.component';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import './Navigation.styles.scss';
import { useContext } from 'react';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { CartContext } from '../../contexts/cart.context';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <nav className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo style={{ width: '35px' }} className='logo' />
        </Link>

        <ul className='nav-links-container'>
          <li>
            <Link className='nav-link' to='/shop'>
              SHOP
            </Link>
          </li>

          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <li>
              <Link className='nav-link' to='/auth'>
                LOGIN
              </Link>
            </li>
          )}

          <li>
            <CartIcon />
          </li>
        </ul>

        {isCartOpen && <CartDropdown />}
      </nav>

      <Outlet />
    </>
  );
};

export default Navigation;
