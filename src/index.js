import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Greeting from './components/Greeting';
import ItemListContainer from "./components/ItemListContainer"

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Greeting />
    <ItemListContainer/>
  </React.StrictMode>,
  document.getElementById('root')
);


//ReactDOM.render(<Greeting />, document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
