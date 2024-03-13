
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import DialogsConteiner from './components/Dialogs/DialogsConteiner';
import MusicConteiner from './components/music/MusicConteiner';
import UsersConteiner from './components/Users/UsersConteiner';
import ProfileContainer from './components/ProFile/ProfileConteiner';
import HeaderConteiner from './components/Header/HeaderConteiner';


const App = (props) => {
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
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

