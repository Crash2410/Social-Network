import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Friend from './components/Friends/Friend/Friend';
import Friends from './components/Friends/Friends';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import Sidebar from './components/Sidebar/Sidebar';


function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Sidebar state = {props.state.sidebar}/>
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage} />} />
          <Route path='/profile' render={() => <Profile state={props.state.profilePage} addPost = {props.addPost} />} />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/settings' render={() => <Settings />} />
          <Route path='/friends' render={() => <Friends />} />
          <Route path='/friend' render={() => <Friend />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
