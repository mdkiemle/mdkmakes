import React from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import Projects from './containers/Projects/Projects';
import Aux from './hoc/Auxiliary/Auxiliary';

function App() {
  return (
    <Aux>
      <Layout>
        <Projects/>
      </Layout>
    </Aux>
  );
}

export default App;
