import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`

width: 100%;
height: 100%;
background: ${({ theme }) => theme.primaryDark};
display: flex;
align-items: center;
justify-content: center;
margin: 2rem;


  .loader {

    position: relative;

    width: 5vw;
    height: 5vw;

    background: linear-gradient(#ED3237 , #00894C , #FFF212);
    opacity: .5;
    border-radius: 50%;

    animation: ${spin} 1s linear infinite;

    span {

    position: absolute;

    width: 100%;
    height: 100%;

    background: linear-gradient(#ED3237 , #00894C , #FFF212);
    border-radius: 50%;

    }

    span:nth-child(1) {
      filter: blur(5px);
    }
    span:nth-child(2) {
      filter: blur(10px);
    }
    span:nth-child(3) {
      filter: blur(30px);
    }
    span:nth-child(4) {
      filter: blur(20px);
    }

    &:after{
      content: '';
      position: absolute;
      top: 5%;
      left: 5%;
      right: 5%;
      bottom: 5%;

      background: ${({ theme }) => theme.primary};
      border-radius: 50%;
    }
  }
`;
