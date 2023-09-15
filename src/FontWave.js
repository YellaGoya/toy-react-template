import { styled, keyframes } from "styled-components";

const FontWaveAnime = keyframes`
    0% {
        font-weight: 45;
    }
    50% {
        font-weight: 930;
    }
    100% {
        font-weight: 45;
    }
`;

export const FontWave = styled.span`
    font-size: 150px;
    will-change: font-weight;
    animation: ${FontWaveAnime} 5s infinite both;
`;
