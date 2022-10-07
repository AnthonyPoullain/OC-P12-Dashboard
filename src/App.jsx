import { useState, useEffect } from 'react';
import './global.css';
import styled from 'styled-components';

/* Services */
import User from './services/User';

/* Components */
import Layout from './components/Layout';
import NutrientCard from './components/NutrientCard';
import ActivityChart from './components/charts/ActivityChart';
import SessionsChart from './components/charts/SessionsChart';
import PerformanceChart from './components/charts/PerformanceChart';

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

const Charts = styled.main`
  display: grid;
  gap: 24px 30px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-areas:
    'activity activity activity nutrients'
    'sessions performance . nutrients';
`;

const NutrientCards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  grid-area: nutrients;
`;

function App() {
  const [userInfo, setUserInfo] = useState();
  const [userNutrients, setUserNutrients] = useState();
  const [userActivity, setUserActivity] = useState();
  const [userAverageSessions, setUserAverageSessions] = useState();
  const [userPerformance, setUserPerformance] = useState();

  useEffect(() => {
    async function getData() {
      const user = new User(USER_ID);

      const info = await user.getInfo();
      const nutrients = await user.getNutrients();
      const activity = await user.getActivity();
      const averageSessions = await user.getAverageSessions();
      const performance = await user.getPerformance();

      setUserInfo(info);
      setUserNutrients(nutrients);
      setUserActivity(activity);
      setUserAverageSessions(averageSessions);
      setUserPerformance(performance);
    }
    getData();
  }, []);

  return (
    <div className="App">
      <Layout>
        {userInfo && (
          <Header>
            <h1>
              Bonjour <strong>{userInfo.firstName}</strong>
            </h1>
            <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
          </Header>
        )}
        <Charts>
          {userActivity && <ActivityChart data={userActivity} />}
          {userInfo && (
            <NutrientCards>
              {userNutrients.map((item) => (
                <NutrientCard
                  icon={item.icon}
                  amount={item.amount}
                  unit={item.unit}
                  label={item.label}
                  key={item.label}
                />
              ))}
            </NutrientCards>
          )}
          {userAverageSessions && <SessionsChart data={userAverageSessions} />}
          {userPerformance && <PerformanceChart data={userPerformance} />}
        </Charts>
      </Layout>
    </div>
  );
}

export default App;
