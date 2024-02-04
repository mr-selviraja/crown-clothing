import React from 'react';
import { ReactComponent as Page404Svg } from '../../../src/assets/404-illustration.svg';
import './Page404.styles.scss';
import { Link } from 'react-router-dom';

const Page404 = () => {
  return (
    <section className='page-404'>
      <Page404Svg
        style={{ width: '20rem', height: '20rem', marginTop: '5rem' }}
      />

      <h2>Page Not Found</h2>

      <br />

      <Link
        path='/'
        style={{
          color: 'dodgerblue',
          fontWeight: 700,
          textDecoration: 'underline',
        }}
      >
        Go back Home
      </Link>
    </section>
  );
};

export default Page404;
