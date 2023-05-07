import React, { useState } from 'react';
import Router from 'components/Router';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return <Router isLoggedIn={isLoggedIn} />;
};

export default App;
