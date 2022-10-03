import styled from 'styled-components';
import PropTypes from 'prop-types';
import React from 'react';
import Nav from './Nav';
import Sidebar from './Sidebar';

const MainContent = styled.main`
  padding: 70px 90px 90px 226px;
`;

function Layout({ children }) {
  return (
    <>
      <Nav />
      <Sidebar />
      <MainContent>{children}</MainContent>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
