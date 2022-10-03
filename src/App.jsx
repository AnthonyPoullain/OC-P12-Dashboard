import { useState, useEffect } from 'react';
import './global.css';
import styled from 'styled-components';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import getUserInfo from './services/getUserInfo';

const MainContent = styled.main`
  padding: 70px 90px 90px 226px;
`;

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

const Graphs = styled.main`
  display: grid;
  gap: 30px;

  div {
    background-color: #fbfbfb;
    min-width: 100px;
    min-height: 100px;
  }
`;

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    async function getData() {
      const userInfo = await getUserInfo(12);
      setData(userInfo.data);
    }
    getData();
  }, []);

  return (
    data && (
      <div className="App">
        <Nav />
        <Sidebar />
        <MainContent>
          <Header>
            <h1>
              Bonjour <strong>{data.userInfos.firstName}</strong>
            </h1>
            <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
          </Header>
          <Graphs>
            <span />
          </Graphs>
        </MainContent>
      </div>
    )
  );
}

export default App;
