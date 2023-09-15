import { styled, keyframes, createGlobalStyle } from "styled-components";
import PrVr from "./assets/fonts/PretendardVariable.ttf";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'PrVr';
        src: local('PrVr'), local('PrVr');
        font-style: normal;
        src: url(${PrVr}) format('truetype');
    }

    body {
        margin: 0;
        font-family: "PrVr", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;;
        text-rendering: optimizeLegibility;
    }
`;

export const App = styled.div`
    text-align: center;
`;

const AppLogoSpin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const AppLogo = styled.img`
    height: 40vmin;
    pointer-events: none;

    @media (prefers-reduced-motion: no-preference) {
        animation: ${AppLogoSpin} infinite 20s linear;
    }
`;

export const AppHeader = styled.header`
    background-color: #ffffff;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: black;
`;

export default GlobalStyle;
