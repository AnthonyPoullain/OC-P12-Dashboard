import { useState, useEffect } from 'react';
import './global.css';
import styled from 'styled-components';
import getUserInfo from './services/getUserInfo';
import Layout from './components/Layout';
import NutrientCard from './components/NutrientCard';

import CaloriesIcon from './assets/icons/dashboard/icon_calories.svg';
import ProteinIcon from './assets/icons/dashboard/icon_protein.svg';
import CarbsIcon from './assets/icons/dashboard/icon_carbs.svg';
import FatIcon from './assets/icons/dashboard/icon_fat.svg';

const USER_ID = 12;

const Header = styled.header`
  margin-bottom: 77px;
  h1 {
    font-weight: 500;
    font-size: 48px;
    margin-bottom: 41px;

    strong {
      font-weight: inherit;
      color: var(--color-primary);
    }
  }
  h2 {
    font-weight: 400;
    font-size: 18px;
  }
`;

const Graphs = styled.div`
  display: grid;
  gap: 30px;

  div {
    background-color: #fbfbfb;
    min-width: 100px;
    min-height: 100px;
  }
`;

const NutrientCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    async function getData() {
      const userInfo = await getUserInfo(USER_ID);
      setData(userInfo.data);
    }
    getData();
  }, []);

  return (
    data && (
      <div className="App">
        <Layout>
          <Header>
            <h1>
              Bonjour <strong>{data.userInfos.firstName}</strong>
            </h1>
            <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
          </Header>
          <NutrientCards>
            {[
              {
                icon: CaloriesIcon,
                label: 'Calories',
                amount: data.keyData.calorieCount,
                unit: 'kCal',
              },
              {
                icon: ProteinIcon,
                label: 'Protéines',
                amount: data.keyData.proteinCount,
                unit: 'g',
              },
              {
                icon: CarbsIcon,
                label: 'Glucides',
                amount: data.keyData.carbohydrateCount,
                unit: 'g',
              },
              {
                icon: FatIcon,
                label: 'Lipides',
                amount: data.keyData.lipidCount,
                unit: 'g',
              },
            ].map((item) => (
              <NutrientCard
                icon={item.icon}
                amount={item.amount}
                unit={item.unit}
                label={item.label}
              />
            ))}
          </NutrientCards>
          <Graphs>
            <span />
          </Graphs>
        </Layout>
      </div>
    )
  );
}

export default App;
