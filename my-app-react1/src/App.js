
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import ProFile from './components/ProFile/ProFile';
import FriendsConteiner from './components/Friends/FriendsConteiner';
import DialogsConteiner from './components/Dialogs/DialogsConteiner';


const App = (props) => {
  return (

    <BrowserRouter>
      <div className="App">
        <Header />
        <NavBar />
        <div className='appWrapper'>
          <Routes>
            <Route path='/profile' element={<ProFile />} />
            <Route path='/dialogs/*' element={<DialogsConteiner />} />
            <Route path='/friends/*' element={<FriendsConteiner />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

