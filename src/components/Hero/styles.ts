import styled from 'styled-components';
import Layer from '../../assets/layered-steps-haikei.png';

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8rem 8rem;
  color: white;
  height: 100vh;

  gap: 2rem;
  background: url(${Layer});
  background-color: linear-gradient(
    146deg,
    rgba(72, 11, 103, 1) 2%,
    rgba(17, 2, 37, 1) 70%
  );
  background-size: 100%;
  flex-wrap: wrap;

  img {
    max-width: 350px;
  }

  @media (max-width: 1024px) {
    padding: 1rem 1rem;
    order: 2;
    align-items: center;
    justify-content: center;
  }
`;
export const HeroTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-weight: 400;
  }

  span {
    font-weight: 100;
    font-weight: 400;
    font-size: 0.8rem;
  }

  p {
    max-width: 500px;
  }

  div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

export const HeroButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding: 1rem 0;
  font-size: 1.2rem;

  button {
    cursor: pointer;
    outline: none;
    inset: 0;
    border: 0;
    background-color: black;
    color: white;
    padding: 0.8rem;
    border-radius: 6px;
    min-width: 150px;
    transition: background-color 0.2s;

    &:hover {
      background-color: white;
      color: black;
    }

    &:nth-of-type(2) {
      background-color: transparent;
      border: 1px solid white;
      color: white;
      &:hover {
        background-color: black;
        border: 1px solid black;
      }
    }
  }
`;
