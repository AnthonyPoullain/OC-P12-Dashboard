import styled from 'styled-components';
import PropTypes from 'prop-types';
import React from 'react';
import Nav from './Nav';
import Sidebar from './Sidebar';

const MainContent = styled.main`
  margin: 70px 90px 0px clamp(150px, 18vw, 226px);
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
