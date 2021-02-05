import {createGlobalStyle} from 'styled-components';
import { pizzaRed } from '../Styles/colors';

export const GlobalStyle = createGlobalStyle`

  body {

    font-family: 'Open Sans', sans-serif;
    margin: 0;


  }

  h1, h2, h3 {

    font-family: 'Righteous', cursive;

  }

  input {
    width: 100%;
    position: relative;
    border-bottom: 0px 0px 0px 2px solid black;
  }

  input[type=text] {
    border: none;
    border-bottom: 2px solid ${pizzaRed};
  }

  input[type=submit]{

    background-color: ${pizzaRed};
    cursor: pointer;
    height: 20px;
    border-radius: 5px;
    text-align: center;
    width: 200px;

  }
  

`