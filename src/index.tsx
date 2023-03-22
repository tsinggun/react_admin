import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom';
import 'normalize.css'
import '@/assets/style/index.less'
import { ThemeProvider } from 'styled-components'
import store from './store';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// console.log(process.env)

root.render(
  <Provider store={store}>
    <ThemeProvider theme={{color: "white"}}>
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
