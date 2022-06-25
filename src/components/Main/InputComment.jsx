import React, { useState } from 'react';
import styled from 'styled-components';
import { BsEmojiSmile } from 'react-icons/bs';
import { FlexBox } from '../../styles/FlexBox.styled';
import useInput from '../../hooks/useInput';
import { getLogInData } from '../../util/getLogInData';

const Button = styled.button`
  background: transparent;
  color: #7da8f8;
  :hover {
    cursor: pointer;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  padding: 6px 16px 6px 0px;
  border-top: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
`;
const Input = styled.input`
  width: 80%;
  background: transparent;
  font-size: 18px;
`;

const InputComment = ({ setFeeds, id }) => {
  // const [comments, handleCommentsChange] = useInput('');
  const [comments, setComments] = useState('');
  const handleCommentsChange = (e) => setComments(e.target.value);

  const handleCommentSubmit = () => {
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
        <FlexBox>
          <div style={{ paddingRight: '16px' }}>
            <BsEmojiSmile size={'23px'} />
          </div>
          <Input
            onChange={handleCommentsChange}
            value={comments}
            placeholder="댓글 달기..."
          />
        </FlexBox>
        <Button onClick={handleCommentSubmit}>게시</Button>
      </FlexBox>
    </Wrapper>
  );
};
export default InputComment;
