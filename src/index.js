import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/GlobalStyle';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

const theme = {
  colors: {
    error: '#F15959',
  },
  spacing: value => `${value * 5}px`,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);
