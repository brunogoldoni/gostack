import styled from 'styled-components';
import { shade } from 'polished';

import SignInBackgroundImg from '../../assets/sign-in-background.png';

export const Container = styled.div`
  align-items: stretch;
  display: flex;
  height: 100vh;
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  max-width: 700px;
  place-content: center;
  width: 100%;

  form {
    margin: 80px 0;
    text-align: center;
    width: 340px;

    h1 {
      margin-bottom: 24px;
    }

    input {
      color: #f4ede8;
      background: #232129;
      border: 2px solid #232129;
      border-radius: 10px;
      padding: 16px;
      width: 100%;

      &::placeholder {
        color: #666360;
      }

      & + input {
        margin-top: 8px;
      }
    }

    button {
      background: #ff9000;
      border: 0;
      border-radius: 10px;
      color: #312e38;
      font-weight: 500;
      height: 56px;
      margin-top: 16px;
      padding: 0 16px;
      transition: background-color 0.2s;
      width: 100%;

      &:hover {
        background: ${shade(0.2, '#ff9000')};
      }
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    align-items: center;
    color: #ff9000;
    display: block;
    display: flex;
    margin-top: 24px;
    text-decoration: none;
    transition: background-color 0.2s;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }
`;

export const Background = styled.div`
  background: url(${SignInBackgroundImg}) no-repeat center;
  flex: 1;
`;
