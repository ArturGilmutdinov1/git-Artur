
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DialogsConteiner from './components/Dialogs/DialogsConteiner';
import HeaderConteiner from './components/Header/HeaderConteiner';
import NavBar from './components/NavBar/NavBar';
import ProfileContainer from './components/ProFile/ProfileConteiner';
import UsersConteiner from './components/Users/UsersConteiner';
import Login from './components/login/login';
import MusicConteiner from './components/music/MusicConteiner';


const App = () => {
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
    </BrowserRouter>
  );
}

export default App;

