import styled from 'styled-components';
import PropTypes from 'prop-types';
import React from 'react';
import Nav from './Nav';
import Sidebar from './Sidebar';

const MainContent = styled.main`
  margin: 70px 7vw 0px calc(7vw + 117px);
`;

/**
 * Component for the main layout of the page.
 *
 * @component
 * @category Components
 * @subcategory Layout
 */
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
