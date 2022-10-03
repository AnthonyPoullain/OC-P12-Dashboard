import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Card = styled.div`
  width: 100%;
  max-width: 258px;
  padding: 32px;
  background-color: #fbfbfb;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 24px;

  img {
    width: 60px;
    height: 60px;
  }

  p {
    font-size: 14px;
    font-weight: 500;
    color: #74798c;
    line-height: 24px;
  }

  strong {
    font-size: 20px;
    color: #000;
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
