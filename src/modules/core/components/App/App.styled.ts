import { createGlobalStyle } from 'styled-components';
import { colors } from 'modules/core/constants';

export const GlobalStyles = createGlobalStyle`
    body {
        color: white;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${colors.darkGray};
    }
    * {
        box-sizing: border-box;
    }
`;
