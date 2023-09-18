import styled from "styled-components";


export const DefaultLayoutContainer = styled.div`
    display: grid;
    margin-left: 100px;
    max-width: 100%;

    @media (max-width: 1024px) {
        margin-left: 0px;
    }
`

export const DefaultLayoutSpacing = styled.main`
    padding: 1rem;
`

export const OpenMenu = styled.div`
display: none;

@media (max-width: 1124px) {
    padding: 1rem;
    display: block;
    position: absolute;
    top: 0; 
    left: 0;
}
    
`