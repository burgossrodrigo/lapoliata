import React from "react";
import styled from "styled-components";
import {pizzaRed} from "../Styles/colors";
import {Title} from "../Styles/title";

const NavbarStyled = styled.div`

    background-color: ${pizzaRed};
    padding: 18x;
    position: fixed;
    width: 100%;
    z-index: 999;


`
const Logo = styled(Title)`

    font-size: 20px;
    color: white;
    text-shadow: 2px 2px 10px black;

`

export function Navbar(){

    return <NavbarStyled>
        
        <Logo>Sliceline <span role="img" aria-label="pizza slice">🍕</span></Logo>

    
        
        </NavbarStyled>

}




