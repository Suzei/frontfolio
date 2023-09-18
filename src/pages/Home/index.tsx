import { HomeContainer, HomeProfile, PicAndMenu } from "./styles";

export function Home() {
    return (
        <HomeContainer>
            <HomeProfile>
                <PicAndMenu>
                    <a href="">Sobre</a>
                    <a>Experiência</a>
                    <img src="/kiryu.webp" />
                    <a>Projetos</a>
                    <a>Contato</a>

                </PicAndMenu>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi neque vitae omnis praesentium, quis esse voluptate, iure sunt, dolore porro repellendus. Ipsum magni amet, deleniti illum eum officia minima aspernatur.</p>
            </HomeProfile>

        </HomeContainer>
    )
}