import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
    html {
        font-size: 62.5%;
        overflow-x: hidden;
    }
    *, *::after, *::before {
        box-sizing: inherit;
    }
    body {
        font-family: 'Poppins', sans-serif;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    a, button {
        font-family: 'Poppins', sans-serif
    }
`;

export default GlobalStyle;
