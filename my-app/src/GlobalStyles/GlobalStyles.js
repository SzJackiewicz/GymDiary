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
color:black;
}

input{
background: rgba( 255, 255, 255, 0.80 );
backdrop-filter: blur( 4.0px );
-webkit-backdrop-filter: blur( 4.0px );
border-radius: 10px;
}

.wrapperDash{
    min-height: 80%;
    max-width: 290px;
    margin: 30px auto;
    background: rgba(123, 119, 119, 0.45);
    backdrop-filter: blur(10.5px);
    -webkit-backdrop-filter: blur(10.5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    display: flex;
    flex-direction: column;
    padding-top: 40px;
    overflow:auto; 
  }
}
`;
