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
      {/* GNB */}
      <GNB />

      {/* Feeds */}
      <FeedsWrapper>
        <FlexBox flexDirection="column" justifyContent="center">
          {feeds &&
            feeds.map((feed, i) => (
              <Feed key={feed.key} data={feed} setFeeds={setFeeds} />
            ))}
        </FlexBox>
      </FeedsWrapper>
    </LoginCheck>
  );
};

const FeedsWrapper = styled.div`
  background: rgb(255, 255, 255);
`;

export default Main;
