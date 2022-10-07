import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Card = styled.div`
  /* width: 100%; */
  max-width: 258px;
  max-height: 124px;
  padding: 32px;
  background-color: #fbfbfb;
  border-radius: 5px;
  display: flex;
  align-items: center;

  img {
    width: 60px;
    height: 60px;
    margin-right: 24px;
  }

  p {
    font-size: 14px;
    font-weight: 500;
    color: #74798c;
  }

  strong {
    font-size: 20px;
    color: #000;
    line-height: 24px;
  }
`;

function NutrientCard({ icon, amount, unit, label }) {
  return (
    <Card>
      <img src={icon} alt={`${label} icon`} />
      <div>
        <p>
          <strong>
            {amount}
            {unit}
          </strong>
        </p>
        <p>{label}</p>
      </div>
    </Card>
  );
}

NutrientCard.propTypes = {
  icon: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default NutrientCard;
