import React from 'react';
import './App.css';
import Footer from './Components/Måndag/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Måndag/Main/Main';

const name = 'Ada Lovelace';
const App: React.FC = () => {
  return (
    <>
      <Header dag='måndag'/>
      <Main />
      <Footer />
      <Header dag='onsdag'/>
      <Ada />
    </>
  );
}

export default App;
