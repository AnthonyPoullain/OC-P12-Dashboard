import { useState, useEffect } from 'react';
import './global.css';
import styled from 'styled-components';

/* Services */
import User from './services/User';

/* Components */
import Layout from './components/Layout';
/* import NutrientCard from './components/NutrientCard'; */
/* import ActivityGraph from './components/ActivityGraph'; */
/* import SessionsGraph from './components/SessionsGraph'; */
import PerformanceGraph from './components/PerformanceGraph';

/* Assets */
/* import CaloriesIcon from './assets/icons/dashboard/icon_calories.svg'; */
/* import ProteinIcon from './assets/icons/dashboard/icon_protein.svg'; */
/* import CarbsIcon from './assets/icons/dashboard/icon_carbs.svg'; */
/* import FatIcon from './assets/icons/dashboard/icon_fat.svg'; */

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

/* const NutrientCards = styled.div` */
/*   display: flex; */
/*   flex-direction: column; */
/*   gap: 24px; */
/* `; */

function App() {
  const [userInfo, setUserInfo] = useState();
  /* const [userActivity, setUserActivity] = useState(); */
  /* const [userAverageSessions, setUserAverageSessions] = useState(); */
  const [userPerformance, setUserPerformance] = useState();
  const user = new User(USER_ID);

  useEffect(() => {
    async function getData() {
      const info = await user.getInfo();
      /* const activity = await user.getActivity(); */
      /* const averageSessions = await user.getAverageSessions(); */
      const performance = await user.getPerformance();

      setUserInfo(info);
      /* setUserActivity(activity); */
      /* setUserAverageSessions(averageSessions); */
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
              Bonjour <strong>{userInfo.userInfos.firstName}</strong>
            </h1>
            <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
          </Header>
        )}
        {userPerformance && (
          <PerformanceGraph
            kind={userPerformance.kind}
            data={userPerformance.data}
          />
        )}
        {/* {userActivity && <ActivityGraph data={userActivity.sessions} />} */}
        {/* {userAverageSessions && ( */}
        {/*   <SessionsGraph data={userAverageSessions.sessions} /> */}
        {/* )} */}
        {/* {userInfo && ( */}
        {/*   <NutrientCards> */}
        {/*     {[ */}
        {/*       { */}
        {/*         icon: CaloriesIcon, */}
        {/*         label: 'Calories', */}
        {/*         amount: userInfo.keyData.calorieCount, */}
        {/*         unit: 'kCal', */}
        {/*       }, */}
        {/*       { */}
        {/*         icon: ProteinIcon, */}
        {/*         label: 'Protéines', */}
        {/*         amount: userInfo.keyData.proteinCount, */}
        {/*         unit: 'g', */}
        {/*       }, */}
        {/*       { */}
        {/*         icon: CarbsIcon, */}
        {/*         label: 'Glucides', */}
        {/*         amount: userInfo.keyData.carbohydrateCount, */}
        {/*         unit: 'g', */}
        {/*       }, */}
        {/*       { */}
        {/*         icon: FatIcon, */}
        {/*         label: 'Lipides', */}
        {/*         amount: userInfo.keyData.lipidCount, */}
        {/*         unit: 'g', */}
        {/*       }, */}
        {/*     ].map((item) => ( */}
        {/*       <NutrientCard */}
        {/*         icon={item.icon} */}
        {/*         amount={item.amount} */}
        {/*         unit={item.unit} */}
        {/*         label={item.label} */}
        {/*       /> */}
        {/*     ))} */}
        {/*   </NutrientCards> */}
        {/* )} */}
        <Graphs>
          <span />
        </Graphs>
      </Layout>
    </div>
  );
}

export default App;
