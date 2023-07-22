import { List } from 'phosphor-react';
import { HamburguerMenu, HeaderContainer } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <nav>
        <h2>VDEv</h2>
        <ul>
          <li>Home</li>
          <li>Sobre</li>
          <li>Projetos</li>
        </ul>

        <HamburguerMenu>
          <List color="black" size={35} />
        </HamburguerMenu>
      </nav>
    </HeaderContainer>
  );
}
