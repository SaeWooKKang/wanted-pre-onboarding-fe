import React from 'react';

import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { HiHome, HiLogout } from 'react-icons/hi';
import { IoMdPaperPlane } from 'react-icons/io';
import { BsPlusSquare } from 'react-icons/bs';
import { AiOutlineCompass, AiOutlineHeart } from 'react-icons/ai';
import { Ul } from '../../styles/Ul.styled';

const GNB = () => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.setItem(
      'user',
      JSON.stringify({ isLogedIn: false, data: null })
    );
    navigate('/login');
  };

  return (
    <Wrapper>
      <Content>
        <h1>instagram</h1>

        <input placeholder="검색" />

        <Ul betweenMargin="22px">
          <li>
            <HiHome size={24} />
          </li>
          <li>
            <IoMdPaperPlane size={24} />
          </li>
          <li>
            <BsPlusSquare size={24} />
          </li>
          <li>
            <AiOutlineCompass size={24} />
          </li>
          <li>
            <AiOutlineHeart size={24} />
          </li>
          <li onClick={handleLogOut}>
            <HiLogout size={24} />
          </li>
        </Ul>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  position: sticky;
  left: 0;
  top: 0;

  width: 100%;
  height: auto;

  display: flex;
  justify-content: center;

  border-bottom: 1px solid #dbdbdb;
  background: rgb(255, 255, 255);
`;
const Content = styled.header`
  width: 935px;
  height: 60px;
  padding: 0 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  input {
    width: 236px;
    height: 36px;

    padding: 0 16px;

    background: #efefef;
    border-radius: 4px;
  }

  input::-webkit-input-placeholder {
    background-image: url(https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-256.png);
    background-size: contain;
    background-repeat: no-repeat;
    padding-left: 20px;
  }

  @media (max-width: 640px) {
    input {
      display: none;
    }
  }
`;
export default GNB;
