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
    animation: ${FontWaveAnime} 5s infinite both;
`;
