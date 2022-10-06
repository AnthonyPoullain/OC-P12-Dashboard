import { useState, useEffect } from 'react';
import './global.css';
import styled from 'styled-components';

/* Services */
import User from './services/User';

/* Components */
import Layout from './components/Layout';
import NutrientCard from './components/NutrientCard';
import ActivityGraph from './components/ActivityGraph';
import SessionsGraph from './components/SessionsGraph';
import PerformanceGraph from './components/PerformanceGraph';

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
`;

const NutrientCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

function App() {
  const [userInfo, setUserInfo] = useState();
  const [userNutrients, setUserNutrients] = useState();
  const [userActivity, setUserActivity] = useState();
  const [userAverageSessions, setUserAverageSessions] = useState();
  const [userPerformance, setUserPerformance] = useState();

  const user = new User(USER_ID);

  useEffect(() => {
    async function getData() {
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
        <Graphs>
          {userActivity && <ActivityGraph data={userActivity} />}
          {userPerformance && <PerformanceGraph data={userPerformance} />}
          {userAverageSessions && <SessionsGraph data={userAverageSessions} />}
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
        </Graphs>
      </Layout>
    </div>
  );
}

export default App;
