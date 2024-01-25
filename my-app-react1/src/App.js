
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import ProFile from './components/ProFile/ProFile';



const App = (props) => {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavBar />
        <div className='appWrapper'>
          <Routes>
            <Route path='/profile'
              element={<ProFile postData={props.appState.profillePage.postData} />} />
            <Route path='/dialogs/*' element={<Dialogs
              dialogData={props.appState.dialogPage.dialogData}
              messageData={props.appState.dialogPage.messageData} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

