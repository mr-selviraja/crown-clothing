import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import './Navigation.styles.scss';

const Navigation = () => {
  return (
    <>
      <nav className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>

        <ul className='nav-links-container'>
          <li>
            <Link className='nav-link' to='/shop'>
              SHOP
            </Link>
          </li>

          <li>
            <Link className='nav-link' to='/sign-in'>
              LOGIN
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Navigation;
