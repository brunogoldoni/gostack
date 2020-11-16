import React from 'react';

import SignIn from './pages/SignIn';
import SignUp from './pages/SingUp';

import GlobalStyle from './styles/global';

import AuthContext from './context/AuthContext';

const App: React.FC = () => {
  return (
    <>
      <AuthContext.Provider value={{ name: 'Bruno Goldoni' }}>
        <SignIn />
      </AuthContext.Provider>

      <GlobalStyle />
    </>
  );
};

export default App;
