import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        max-width: 100%;
        width: 300px;
        object-fit: cover;
        height: 300px;
        border-radius: 99999px;
        z-index: 100;
    }
`

export const HomeProfile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    margin-top: -190px;

    

    p {
        font-size: 1.5rem;
        text-align: center;
        max-width: 1120px;
        background-color: white;
        padding: 1rem;
        border-radius: 0.5rem;
        margin-top: -35px;
        z-index: -1px;
        font-weight: 400;

        @media (max-width: 1024px) {
        margin-top: 20px;
    }
}

`

export const PicAndMenu = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;

    @media (max-width: 1124px) {
        img {
            z-index: -100px;
            
        }
    }

    a {
        @media (max-width: 1124px) {
            display: none;
        }
        color: white;
    }
`