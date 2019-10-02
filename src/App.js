import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Header from './Components/Header/Header';
import MainPage from './Components/MainPage/MainPage';
import {Route} from 'react-router-dom';
import BackgroundApp from './Components/BackgroundApp/BackgroundApp';

const App =() => {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Route path='/home' render={()=><MainPage />} />
      <Route path='/settings' render={()=><BackgroundApp />} />
    </div>
  );
}

export default App;
