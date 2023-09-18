import styled from "styled-components";

interface MobileProps {
    showing?: boolean;
}

export const NavContainer = styled.nav<MobileProps>`
    min-height: 320px;
    position: fixed;
    height: 95vh;
    box-shadow: -1px -1px 8px black;
    min-width: 100px;
    padding: 3rem 0;
    z-index: 200;
    border-bottom-right-radius: 20px;

    display: flex;
    gap: 3rem;

    flex-direction: column;
    justify-content: flex-start ;
    align-items: center;
    background-color: #272626;

    svg {
        color: white;
    }

    span {
        display: none;
    }

    @media (max-width: 1124px) {
        display: ${(props) => props.showing ? 'flex' : 'none'};
        align-items: flex-start;
        padding: 2rem 1rem;
        gap: 2rem;
        min-width: 350px;
        z-index: 90000;

        span {
            display: block;
            color: whitesmoke;
            cursor: pointer;
        }

        a {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        
    }
`

export const MobileOptions = styled.div`

@media(min-width: 1124px) {
    display: none;
}
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
`

export const NavContainerOverlay = styled.div<MobileProps>`
@media (max-width: 1124px) {
    display: ${(props) => (props.showing ? 'flex' : 'none')};
    width: 100%;
    inset: 0;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    z-index: 1000;
}

`