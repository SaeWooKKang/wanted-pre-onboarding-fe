import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import LoginCheck from '../components/common/LoginCheck';
import GNB from '../components/Main/GlobalNavigationBar';
import Feed from '../components/Main/Feed';

import { FlexBox } from '../styles/FlexBox.styled';

const Main = () => {
  const [feeds, setFeeds] = useState(null);

  const getFeeds = async () =>
    fetch('./data/data.json').then((res) => res.json());

  useEffect(() => {
    getFeeds().then((res) => setFeeds(res));
  }, []);

  return (
    <LoginCheck>
      <Wrapper>
        {/* GNB */}
        <GNB />

        {/* Feeds */}
        <FlexBox flexDirection="column" justifyContent="center">
          {feeds &&
            feeds.map((feed) => (
              <Feed key={feed.key} data={feed} setFeeds={setFeeds} />
            ))}
        </FlexBox>
      </Wrapper>
    </LoginCheck>
  );
};

const Wrapper = styled.div`
  background: rgb(255, 255, 255);
`;

export default Main;
