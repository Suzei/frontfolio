import { SocialMediaContainer } from './styles';

interface ISocialMediaLogos {
  socialMediaName: JSX.Element;
}

export function SocialMediaLogos({ socialMediaName }: ISocialMediaLogos) {
  return <SocialMediaContainer>{socialMediaName}</SocialMediaContainer>;
}
