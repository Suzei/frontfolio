import { HeroButtons, HeroContainer, HeroTitle } from './styles';
import Kiryu from '../../assets/kiryu.jpeg';
export function Hero() {
  return (
    <HeroContainer>
      <div>
        <HeroTitle>
          <h1>Vinícius Silva</h1>
          <span>Dev Full-Stack</span>
        </HeroTitle>
        <HeroButtons>
          <button>Baixar CV</button>
          <button>Fale comigo!</button>
        </HeroButtons>
      </div>
      <img src={Kiryu} />
    </HeroContainer>
  );
}
