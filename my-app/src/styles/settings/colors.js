import {createGlobalStyle} from 'styled-components'; 

//Injetar variaveis globais para o CSS
const GlobalColors = createGlobalStyle`
    :root{
        --color-zero: #fff;
        --color-frist: #3b86ff;
    }
`;

export default GlobalColors;