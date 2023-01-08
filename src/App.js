import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact'
import inputData from './config';

export const App = () => (
  <React.Fragment>
      <Home inputData={inputData}/>
      <About inputData={inputData}/>
      <Resume inputData={inputData} />
      <Portfolio inputData={inputData}/>
      <Contact inputData={inputData}/>
  </React.Fragment>
)

export default App;
