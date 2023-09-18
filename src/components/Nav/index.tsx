import { HouseLine, TextIndent, LinkedinLogo, GithubLogo, User, Info, Check, Envelope } from "phosphor-react";
import { Link } from 'react-router-dom'
import { MobileOptions, NavContainer, NavContainerOverlay } from "./styles";

export function Nav({ isShowing }: { isShowing?: boolean }) {

    return (
        <NavContainerOverlay>
            <NavContainer showing={isShowing}>
                <Link to="/">
                    <HouseLine size={30} />
                    <span>Início</span>
                </Link>
                <MobileOptions>
                    <a>
                        <User size={30} />
                        <span>Sobre</span>
                    </a>
                    <a>
                        <Info size={30} />
                        <span>Experiência</span>
                    </a>
                    <a>
                        <Check size={30} />
                        <span>Projetos</span>
                    </a>
                    <a>
                        <Envelope size={30} />
                        <span>Contato</span>
                    </a>
                </MobileOptions>

                <Link to="/blog">
                    <TextIndent size={30} />
                    <span>Blog</span>
                </Link>
                <a target="_blank" href="https://www.linkedin.com/in/silva-viniciusdev/">
                    <LinkedinLogo size={30} />
                    <span>Linkedin</span>
                </a>

                <a href="https://github.com/Suzei" target="_blank">
                    <GithubLogo size={30} />
                    <span>Github</span>
                </a>
            </NavContainer>
        </NavContainerOverlay>
    )
}