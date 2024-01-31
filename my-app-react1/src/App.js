
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import ProFile from './components/ProFile/ProFile';
import Friends from './components/Friends/Friends';


const App = (props) => {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavBar />
        <div className='appWrapper'>
          <Routes>
            <Route path='/profile'
              element={
                <ProFile
                  postData={props.state.profillePage}
                  addPost={props.addPost}
                  updateNewPost={props.updateNewPost}
                />
              } />
            <Route path='/dialogs/*' element={<Dialogs
              dialogData={props.state.dialogPage.dialogData}
              messageData={props.state.dialogPage.messageData}
              sendMessage={props.sendMessage}
              updateNewMessage={props.updateNewMessage}
            />} />
            <Route path='/friends/*' element={<Friends
              peopleDate={props.state.friends.people}
            />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

