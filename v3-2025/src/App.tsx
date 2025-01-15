import React from 'react';
import './App.css';
import Footer from './Components/Måndag/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Måndag/Main/Main';
import Ada from './Components/Onsdag/Ada/Ada';
import Grandfather from './Components/Onsdag/Profilecard/Grandfather';

const App: React.FC = () => {
  return (
    <>
      <Header dag='måndag'/>
      <Main />
      <Footer />
      <Header dag='onsdag Ada Lovelace'/>
      <Ada />
      <Header dag='onsdag Profilkort'/>
      <Grandfather />

    </>
  );
}

export default App;
