import React from 'react';
import styled from 'styled-components';
import { emailToId } from '../../util/emailToId';

const Comment = ({ comments }) => {
  return (
    <div>
      {comments.map(({ email, comment, key }) => (
        <div key={key}>
          <span style={{ fontWeight: 'bold' }}>{emailToId(email)}</span>{' '}
          <span>{comment}</span>
        </div>
      ))}
    </div>
  );
};

export default Comment;
