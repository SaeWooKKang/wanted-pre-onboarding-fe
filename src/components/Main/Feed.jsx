import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { IoIosMore, IoMdPaperPlane } from 'react-icons/io';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { FaRegCommentDots } from 'react-icons/fa';
import { RiBookmarkLine, RiBookmarkFill } from 'react-icons/ri';

import { FlexBox } from '../../styles/FlexBox.styled';
import { Ul } from '../../styles/Ul.styled';

import Comment from './Comment';
import InputComment from './InputComment';

import { emailToId } from '../../util/emailToId';

const Feed = ({ data, setFeeds }) => {
  const [imgLoading, setImageLoading] = useState(true);
  const [imgBlob, setImageBlob] = useState(null);

  const getImgBlob = async (url) => {
    let res;
    const response = await fetch(url);
    const imageBlob = await response.blob();
    const reader = new FileReader();

    reader.readAsDataURL(imageBlob);
    reader.onloadend = () => {
      const base64data = reader.result;
      setImageBlob(base64data);
      setImageLoading(false);
    };
    return res;
  };
  useEffect(() => {
    getImgBlob(data.img_url);
  }, []);

  return (
    imgLoading || (
      <Wrapper>
        {/* Header */}
        <Header>
          <FlexBox>
            <Circle />
            <div>{emailToId(data.email)}</div>
          </FlexBox>
          <IoIosMore />
        </Header>

        <ImgWrapper>
          <FlexBox justifyContent="center">
            <Img src={imgBlob} />
          </FlexBox>
        </ImgWrapper>

        {/* Buttons */}
        <FlexBox justifyContent="space-between">
          <Ul liPadding="8px">
            <li>
              <AiOutlineHeart size={24} />
            </li>
            <li>
              <FaRegCommentDots size={24} />
            </li>
            <li>
              <IoMdPaperPlane size={24} />
            </li>
          </Ul>
          <Ul liPadding="8px">
            <li>
              <RiBookmarkLine size={24} />
            </li>
          </Ul>
        </FlexBox>

        {/* Comments */}
        <CommentsWrapper>
          {/* Likes */}
          <Likes>좋아요 {data.likes}개</Likes>

          {/* Comments */}
          <CommentWrapper>
            <Comment comments={data.comments} />
          </CommentWrapper>

          {/* InputComment */}
          <InputComment id={data.key} setFeeds={setFeeds} />
        </CommentsWrapper>
      </Wrapper>
    )
  );
};

const Wrapper = styled.section`
  border: 1px solid #dbdbdb;
  width: 614px;
  height: auto;
  margin-top: 24px;

  @media (max-width: 640px) {
    width: 100%;
  }
`;
const Header = styled.header`
  width: 100%;
  padding: 14px 16px;
  display: flex;
  justify-content: space-between;
`;
const Circle = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  background: #c5c5c5;
  margin-right: 10px;
`;
const ImgWrapper = styled.section`
  width: 100%;
  height: auto;
  max-height: 800px;
  overflow: hidden;
  background: #ececec;
`;

const Img = styled.img`
  src: ${(props) => props.src};
`;
const CommentsWrapper = styled.section`
  padding: 0 8px;
`;

const Likes = styled.div`
  margin: 8px 0;
`;
const CommentWrapper = styled.div`
  margin: 8px 0;
`;

export default Feed;
