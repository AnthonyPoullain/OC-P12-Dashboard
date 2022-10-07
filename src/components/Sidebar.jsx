import React from 'react';
import styled from 'styled-components';
import ActivityIcon from './ActivityIcon';
import yogaIcon from '../assets/icons/sidebar/icon_yoga.svg';
import swimmingIcon from '../assets/icons/sidebar/icon_swimming.svg';
import cyclingIcon from '../assets/icons/sidebar/icon_cycling.svg';
import liftingIcon from '../assets/icons/sidebar/icon_lifting.svg';

// Add or delete sidebar icons here
const SIDEBAR_ICONS = [
  { icon: yogaIcon, alt: 'Yoga' },
  { icon: swimmingIcon, alt: 'Swimming' },
  { icon: cyclingIcon, alt: 'Cycling' },
  { icon: liftingIcon, alt: 'Strength Training' },
];

const SideBar = styled.aside`
  width: 117px;
  height: 933px;
  background-color: black;
  position: relative;
  float: left;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Copyright = styled.div`
  color: #fff;
  transform: rotate(-90deg);
  transform-origin: 0, 0;
  white-space: nowrap;
  position: absolute;
  bottom: 120px;
  left: -18px;
`;

function Sidebar() {
  return (
    <SideBar>
      <div className="icons">
        {SIDEBAR_ICONS.map((item) => (
          <ActivityIcon icon={item.icon} alt={item.alt} key={item.alt} />
        ))}
      </div>
      <Copyright>Copyright, SportSee 2020</Copyright>
    </SideBar>
  );
}

export default Sidebar;
