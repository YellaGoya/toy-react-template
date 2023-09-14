import { styled, keyframes } from "styled-components";

const FontWaveAnime = keyframes`
    0% {
        font-weight: 45;
    }
    50% {
        font-weight: 200;
    }
    100% {
        font-weight: 45;
    }
`;

export const FontWave = styled.span`
    font-size: 150px;
    animation: ${FontWaveAnime} 4s infinite both;
`;
