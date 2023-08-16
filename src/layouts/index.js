import React from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className=''>
      <Outlet />
    </div>
  );
};

Layout.propTypes = {

};

export default Layout;
