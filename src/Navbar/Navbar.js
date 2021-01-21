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
	color: white;


`;
const Logo = styled(Title)`

    font-size: 20px;
    color: white;
    text-shadow: 2px 2px 10px black;

`;

const UserStatus = styled.div`

	color: white;
	font-size: 26px;
	margin-right: 30px;
	cursor: pointer;
	


`;

const LoginButton = styled.span`

	cursor: pointer;

`;




export function Navbar({login, logado, logout}){

    return ( <NavbarStyled>
        
        <Logo>La Poliata <span role="img" aria-label="pizza slice">🍕</span></Logo>
		<UserStatus>
		{/*VERIFICAÇÃO DE LOGADO ATRAVÉS DE VALOR DA VAR LOGADO */} 
		{logado !== 'carregando' ? (
		<>
			<span role="img" aria-label="man">👨</span>{ logado ? 'Logado.' : "   "}
				{logado ? (
					<LoginButton onClick={logout}>{"   "}Sair</LoginButton>
			) : (
					<LoginButton onClick={login}> Entre / Criar Conta </LoginButton>)}
			
		</>
		
		) : (
		
			"Carregando..."
		
		)}
		</UserStatus>
		 
        
        </NavbarStyled>

	);
}




