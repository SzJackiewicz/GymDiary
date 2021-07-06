import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;600&display=swap');

body {
    font-family: 'Montserrat', sans-serif;

}

a, button {
    font-family: 'Montserrat', sans-serif;
    border-style: none;
    border-radius: 3px;
}

input{
background: rgba( 255, 255, 255, 0.80 );
backdrop-filter: blur( 4.0px );
-webkit-backdrop-filter: blur( 4.0px );
border-radius: 10px;
}
`;
