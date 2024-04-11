import React from 'react';
import { connect } from "react-redux";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DialogsConteiner from './components/Dialogs/DialogsConteiner';
import HeaderConteiner from './components/Header/HeaderConteiner';
import NavBar from './components/NavBar/NavBar';
import ProfileContainer from './components/ProFile/ProfileConteiner';
import UsersConteiner from './components/Users/UsersConteiner';
import Preloader from './components/common/Preloader/Preloader';
import Login from './components/login/login';
import MusicConteiner from './components/music/MusicConteiner';
import { initializedApp } from './redux/app-reducer';



class App extends React.Component {

  componentDidMount() {
    this.props.initializedApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <BrowserRouter>
        <div className="App">
          <HeaderConteiner />
          <NavBar />
          <div className='appWrapper'>
            <Routes>
              <Route path='/profile/:userId?' element={<ProfileContainer />} />
              <Route path='/dialogs/*' element={<DialogsConteiner />} />
              <Route path='/friends/*' element={<UsersConteiner />} />
              <Route path='/music/*' element={<MusicConteiner />} />
              <Route path='/login/*' element={<Login />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter >
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})
export default connect(mapStateToProps, { initializedApp })(App);

