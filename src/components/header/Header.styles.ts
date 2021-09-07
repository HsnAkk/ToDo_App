import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 17rem;
    background-image: linear-gradient(rgba(0,0,0, 0.8), rgba(0,0,0, 0.15) 50%, rgba(0,0,0, 0.8)), url('./images/header.jpeg');
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        height: 12rem;
    }

    h1 {
        font-size: 4.5rem;
        color: #edf6f9;
        text-shadow: 0 1rem 2rem black;
        opacity: 0;
        transition: 0.2s;
        animation: wipe .8s;
        animation-fill-mode: forwards;

        &:hover {
            text-shadow: 0 2rem 2rem black;
            cursor: pointer;
        }

        @media screen and (max-width: 768px) {
            font-size: 4rem;
        }
        @media screen and (max-width: 480px) {
            font-size: 3rem;
        }
    }

    @keyframes wipe {
        0% {
            opacity: 0;
            transform: translateX(-100%);
        }
        80% {
            transform: translateX(20px);
        }
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;
