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
	display: flex;
	justify-content: space-between;


`;
const Logo = styled(Title)`

    font-size: 20px;
    color: white;
    text-shadow: 2px 2px 10px black;

`;

const userStatus = styled.div`

	color: white;
	font-size: 12px;
	margin-right: 30px;
	


`

export function Navbar(){

    return <NavbarStyled>
        
        <Logo>Sliceline <span role="img" aria-label="pizza slice">🍕</span></Logo>
		<userStatus>
		 teste
		</userStatus> 
    
        
        </NavbarStyled>

}




