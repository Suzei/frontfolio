import styled from 'styled-components';

export const SideMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: white;
  width: 15%;
  padding: 1rem;
  gap: 2rem;
  height: 80vh;
`;

export const SideMenuRoles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  > img {
    border-radius: 50%;
    height: 150px;
    width: 150px;
  }
`;

export const SideMenuSocialMedia = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Divider = styled.div`
  border: 1px solid ${props => props.theme.gray2};
  height: 0;
  width: 100%;
`;
