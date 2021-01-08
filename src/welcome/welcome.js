import React from "react";
import styled from 'styled-components';

const welcomebox = styled.div`

	background-color: red;
    right: 28%;
    top: 15%;
    width: 500px;
    position: fixed;
    height: 75%;
    margin-bottom: 19px;
    z-index: 1;
	box-shadow: 4px 0px 5px 5px grey;
	display: flex;
    flex-direction: column;


`;

 const sizeLabel = styled.div`

    position: absolute;
    background-color: rgb(255 255 255 / 0.8);
    padding: 5px;
    border-radius:10px;

`;

 const DialogShadow = styled.div`

    position: fixed;
    height: 100%;
    width: 100%;
    top: 0px;
    background-color: black;
    opacity: 0.7;
    z-index: 4;


`;






export function Bemvindo() {  

	return(
	
		<>
		<welcomebox>
		<h1>Seja bem vindo à pizzaria La Poliata</h1>
		<h2>Vem com a gente e escolhe o tamanho da sua pizza</h2>
		<sizeLabel>Tamanho médio - duas fatias</sizeLabel>
		<sizeLabel>Tamanho grande - três fatias</sizeLabel>
		<sizeLabel>Tamanho familia - quatro fatias</sizeLabel>
		</welcomebox>
		<DialogShadow/>
		</>
		
		);
	}