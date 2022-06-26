import React, { useState } from 'react';
import styled from 'styled-components';
import { BsEmojiSmile } from 'react-icons/bs';
import { FlexBox } from '../../styles/FlexBox.styled';
import { getLogInData } from '../../util/getLogInData';

const InputComment = ({ setFeeds, id }) => {
  const [comments, setComments] = useState('');
  const handleCommentsChange = (e) => setComments(e.target.value);

  const handleCommentSubmit = (event) => {
    event.preventDefault();

    setFeeds((prev) => {
      const copy = [...prev];
      const index = copy.findIndex((a) => a.key == id);
      copy[index].comments.push({
        key: Date.now(),
        email: getLogInData().data,
        comment: comments,
      });

      return copy;
    });
    setComments('');
  };

  return (
    <Wrapper>
      <FlexBox justifyContent="space-between">
        <Right>
          <span style={{ paddingRight: '16px' }}>
            <BsEmojiSmile size={'23px'} />
          </span>
          <form onSubmit={handleCommentSubmit}>
            <Input
              onChange={handleCommentsChange}
              value={comments}
              placeholder="댓글 달기..."
            />
          </form>
        </Right>
        <Button onClick={handleCommentSubmit}>게시</Button>
      </FlexBox>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  padding: 6px 16px 6px 0px;
  border-top: 1px solid #efefef;
  border-bottom: 1px solid #efefef;

  form {
    width: 90%;
  }
`;
const Right = styled.div`
  width: 90%;
  display: flex;
`;
const Button = styled.button`
  background: transparent;
  color: #7da8f8;
  :hover {
    cursor: pointer;
  }
`;
const Input = styled.input`
  width: 100%;
  background: transparent;
  font-size: 18px;
`;
export default InputComment;
