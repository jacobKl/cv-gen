import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CvDataProvider from './context/CvDataProvider';
import ThemeContextProvider from './context/ThemeContextProvider';
import GlobalStyles from './GlobalStyle';

ReactDOM.render(
  <React.StrictMode>
    <CvDataProvider>
      <ThemeContextProvider>
        <GlobalStyles/>
        <App />
      </ThemeContextProvider>
    </CvDataProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
