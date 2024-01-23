import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postData = [
  { id: 1, message: 'хехех', like: 1 },
  { id: 2, message: 'asdхех', like: 2 },
  { id: 3, message: 'adsasdad', like: 3 },
]

let dialogData = [
  { id: 1, name: 'Артур' },
  { id: 2, name: 'Вадим' },
  { id: 3, name: 'Айдар' },
  { id: 4, name: 'Петя' },
  { id: 5, name: 'Митя' },
]

let messageData = [
  { message: 'привет' },
  { message: 'здравствуй ' },
  { message: 'кек' },
  { message: 'чебурек' },
  { message: 'мек-мек' },
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App postData={postData} dialogData={dialogData} messageData={messageData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
