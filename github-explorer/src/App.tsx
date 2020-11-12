import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GloblaStyle from './styles/global';

import Routes from './routes';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GloblaStyle />
  </>
);

export default App;
