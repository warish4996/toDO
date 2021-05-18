import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import Store from './Redux/store'


//intigrating Redux store and router
const IndexApp = () => {
  return (
      <Provider store={Store}>
       <App/>
      </Provider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <IndexApp />
  </React.StrictMode>,
  document.getElementById('root')
);


