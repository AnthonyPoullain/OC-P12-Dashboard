import React from 'react';
/* import styled from 'styled-components'; */

function NutrientCard({ type, amount }) {
  const data = { amount: `${amount}` };
  switch (type) {
    case 'calories':
      data.label = 'Calories';
      break;
    case 'proteins':
      data.label = 'Protéines';
      break;
    case 'carbs':
      data.label = 'Glucides';
      break;
    case 'fats':
      data.label = 'Lipides';
      break;
    default:
      data.label = 'Calories';
      break;
  }

  return (
    <div>
      <img src="" alt="icon" />
      <div>
        <p></p>
        <p></p>
      </div>
    </div>
  );
}

export default NutrientCard;
