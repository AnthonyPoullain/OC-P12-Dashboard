import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Icon = styled.div`
  width: 64px;
  height: 64px;
  background-color: #fff;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  img {
    width: 50%;
    height: auto;
  }
`;

function ActivityIcon({ icon, alt }) {
  return (
    <a href="/">
      <Icon>
        <img src={icon} alt={alt} />
      </Icon>
    </a>
  );
}

ActivityIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ActivityIcon;
