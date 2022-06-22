import React from 'react';

import LoginCheck from '../components/common/LoginCheck';
import GNB from '../components/Main/GlobalNavigationBar';

const Main = () => {
  return (
    <LoginCheck>
      <GNB />
    </LoginCheck>
  );
};

export default Main;
