import { SocialMediaLogos } from '../SocialMediaLogos';
import {
  Divider,
  SideMenuContainer,
  SideMenuRoles,
  SideMenuSocialMedia,
} from './styles';
import { LinkedinLogo, GithubLogo, RocketLaunch } from 'phosphor-react';
import Aptitudes, { IAptitude, IAptitudes } from '../Aptitudes';

export function SideMenu() {
  const socialMedia = [
    {
      logo: <LinkedinLogo size={24} />,
      link: '',
    },

    {
      logo: <GithubLogo size={24} />,
      link: '',
    },

    {
      logo: <RocketLaunch size={24} />,
      link: 'https://app.rocketseat.com.br/me/vinicius-silva-1567020199',
    },
  ];

  return (
    <SideMenuContainer>
      <SideMenuRoles>
        <img
          src="https://avatars.githubusercontent.com/u/55220803?v=4"
          alt="Foto com um gato a esquerda e um homem sorrindo a direita"
        />
        <strong>Vinícius Silva</strong>
        <span>Desenvolvedor Front-End</span>
        <SideMenuSocialMedia>
          {socialMedia.map(item => (
            <SideMenuSocialMedia href={item.link}>
              <SocialMediaLogos socialMediaName={item.logo} />
            </SideMenuSocialMedia>
          ))}
        </SideMenuSocialMedia>
      </SideMenuRoles>

      <Divider />
    </SideMenuContainer>
  );
}
