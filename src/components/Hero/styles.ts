import styled from 'styled-components';

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 70vh;
  padding: 8rem 8rem;
  color: white;

  gap: 2rem;
  background-color: beige;
  flex-wrap: wrap;

  background: rgb(72, 11, 103);
  background: linear-gradient(
    146deg,
    rgba(72, 11, 103, 1) 2%,
    rgba(17, 2, 37, 1) 70%
  );

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
  align-items: center;
  padding: 1rem 0;
  gap: 1rem;

  h1 {
    font-weight: 400;
  }

  span {
    font-weight: 100;
    border-radius: 6px;
    font-weight: 400;
    font-size: 0.8rem;
  }
`;

export const HeroButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
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
