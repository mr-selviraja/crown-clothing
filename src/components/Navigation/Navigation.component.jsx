import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import './Navigation.styles.scss';
import { useContext } from 'react';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

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
            <span className='nav-link' onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <li>
              <Link className='nav-link' to='/auth'>
                LOGIN
              </Link>
            </li>
          )}
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Navigation;
