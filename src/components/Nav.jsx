import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/logo/sportsee_logo.svg';

// Add or delete navigation links here
const NAV_LINKS = [
	{ label: 'Accueil', href: '/' },
	{ label: 'Profil', href: '/' },
	{ label: 'Réglage', href: '/' },
	{ label: 'Communauté', href: '/' },
];

const Header = styled.header`
  height: 91px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding-left: 30px;
  background-color: #000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const MainLogo = styled.img`
  width: 178px;
  transform: translateY(1.5px);
`;

const Links = styled.nav`
  color: white;
  font-size: 24px;
  font-weight: 500;
  line-height: 1;
  display: flex;
  justify-content: space-around;
  width: 100%;

  a:hover {
    color: var(--color-primary);
  }
`;

/**
 * Component displaying main navigation.
 *
 * @component
 * @category Components
 * @subcategory Layout
 */
function Nav() {
	return (
		<Header className="nav">
			<a href="/" className="nav__logo">
				<MainLogo src={Logo} alt="SportSee Logo" />
			</a>
			<Links className="nav__links">
				{NAV_LINKS.map((item) => (
					<a href={item.href} key={item.label}>
						{item.label}
					</a>
				))}
			</Links>
		</Header>
	);
}

export default Nav;
