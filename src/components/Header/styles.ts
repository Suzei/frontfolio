import styled from 'styled-components';

export const HeaderContainer = styled.div`
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  height: 90px;
  justify-content: center;
  width: 100%;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  ul {
    display: none;
    gap: 1rem;
    list-style: none;

    li {
      transition: color 0.2s;
      cursor: pointer;
      font-size: 1rem;
      &:hover {
        color: blue;
      }
    }
  }

  @media (min-width: 1024px) {
    ul {
      display: flex;
    }

    nav {
      justify-content: space-evenly;
    }
  }
`;

export const HamburguerMenu = styled.menu`
  @media (min-width: 1024px) {
    svg {
      display: none;
    }
  }
`;
