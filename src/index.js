import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/buttons.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import thunk from 'redux-thunk';
import reducers from './states';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import Authentication from './authentication/Authentication';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-mui';

const options = {
  // you can also just use 'bottom center'
  position: positions.MIDDLE,
  // timeout: 5000,
  // offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE,
  containerStyle: {
    ZIndex: '9999',
  }
};
const store = createStore(reducers, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options}>
      <React.StrictMode>
        <BrowserRouter>
          <Authentication>
            <App />
          </Authentication>
        </BrowserRouter>
      </React.StrictMode>
    </AlertProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
