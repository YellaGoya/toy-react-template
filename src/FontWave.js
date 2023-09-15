import { styled, keyframes } from "styled-components";

const FontWaveAnime = keyframes`
    0% {
        font-variation-settings: "wght" 45;
    }
    50% {
        font-variation-settings: "wght" 900;
    }
    100% {
        font-variation-settings: "wght" 45;
    }
`;

export const FontWave = styled.span`
    font-size: 150px;
    will-change: font-weight;
    animation: ${FontWaveAnime} 5s infinite both;
    transition: font-variation-settings 3s;
`;
