import React from 'react';
import styled from 'styled-components';
import Nav from './components/Nav'

import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";


const Wrapper = styled.div`
  border: 1px solid red;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  border: 1px solid green;
  flex-grow: 1;
  overflow: auto;
`

export default function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
          <Switch>
            <Route path="/tags">
              <Tags />
            </Route>
            <Route path="/money">
              <Money />
            </Route>
            <Route path="/statistics">
              <Satistics />
            </Route>
            <Redirect exact from='/' to='/Money' />
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Main>
      
        <Nav />
      </Wrapper>
    </Router>
  );
}

function NoMatch() {
  return <h2>页面不存在</h2>;
}

function Tags() {
  return <h2>Tags</h2>;
}

function Money() {
  return <h2>Money</h2>;
}

function Satistics() {
  return <h2>Satistics</h2>;
} 