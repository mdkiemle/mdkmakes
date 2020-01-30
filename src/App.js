import React from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import Projects from './containers/Projects/Projects';

function App() {
  return (
    <div>
      <Layout>
        <Projects/>
      </Layout>
    </div>
  );
}

export default App;
