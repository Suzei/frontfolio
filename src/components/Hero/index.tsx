import { HeroButtons, HeroContainer, HeroTitle } from './styles';
import Kiryu from '../../assets/kiryu.jpeg';
export function Hero() {
  return (
    <HeroContainer>
      <div>
        <HeroTitle>
          <div>
            <h1>Vinícius Silva</h1>
            <span>Dev Full-Stack</span> <br />
          </div>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. eveniet
            libero, a ducimus consequatur commodi consequuntur quos, quos,
            voluptates cumque sit itaque deleniti, fuga natus ab! Et maiores sed
            unde.
          </p>
        </HeroTitle>
        <HeroButtons>
          <button>Baixar CV</button>
          <button>Contato</button>
        </HeroButtons>
      </div>
      <img src={Kiryu} />
    </HeroContainer>
  );
}
