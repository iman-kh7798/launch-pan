import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { store } from './store'
import { CookiesProvider } from 'react-cookie'
import App from './components/App'
import './styles.scss'


ReactDOM.render(
  <CookiesProvider>
    <Provider store={store}>
      <React.StrictMode>
        <App/>
      </React.StrictMode>
    </Provider>
  </CookiesProvider>,
  document.getElementById('root')
);
