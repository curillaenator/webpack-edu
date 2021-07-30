import React, { FC } from "react";
import styled from "styled-components";

interface IAuthorStyled {
  size: number;
}

const AuthorStyled = styled.div<IAuthorStyled>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  .avatar {
    width: ${({ size }) => size}rem;
    height: ${({ size }) => size}rem;
    border-radius: 50%;
    object-fit: cover;
  }

  .ownername {
    font-weight: 600;
  }
`;

interface IAuthor {
  avatarURL: string;
  name: string;
  avatarSize?: number;
}

const Author: FC<IAuthor> = ({ avatarURL, name, avatarSize = 2 }) => {
  return (
    <AuthorStyled size={avatarSize}>
      <img className="avatar" src={avatarURL} alt={name} />
      <span className="ownername">{name}</span>
    </AuthorStyled>
  );
};

export default Author;
