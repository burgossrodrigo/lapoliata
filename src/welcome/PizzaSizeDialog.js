import React from "react";
import { Dialog, DialogShadow, DialogFooter, ConfirmButton } from "../FoodDialogue/FoodDialogue";
import styled from 'styled-components';
import {pizzaRed} from '../Styles/colors';
 
const PizzaSizeButom = styled.div`

margin: 10px;
color: white;
height: 20px;
border-radius: 5px;
padding: 10px;
text-align: center;
width: 200px;
cursor: pointer;
background-color: ${pizzaRed};

`;

const DialogContentPizzaSize = styled.div`

overflow: auto;
min-height: 100px;
padding: 0px 40px;
padding-left: 130px;


`

export function PizzaSizeDialog({ setOpenPizzaSizeDialog, openPizzaSizeDialog, setOpenPizzaSize }){
	
	return (
		openPizzaSizeDialog  ? (
		<>
			<DialogShadow  />
			<Dialog>
				<DialogContentPizzaSize >
					<PizzaSizeButom onClick={() => {setOpenPizzaSize(2); setOpenPizzaSizeDialog(false)}}><span role="img" aria-label="pizza slice" >🍕🍕</span> Média</PizzaSizeButom>
                    <PizzaSizeButom onClick={() => {setOpenPizzaSize(3); setOpenPizzaSizeDialog(false)}}><span role="img" aria-label="pizza slice" >🍕🍕🍕</span> Grande</PizzaSizeButom>
                    <PizzaSizeButom onClick={() => {setOpenPizzaSize(4); setOpenPizzaSizeDialog(false)}}><span role="img" aria-label="pizza slice" >🍕🍕🍕🍕</span> Família</PizzaSizeButom>
				</DialogContentPizzaSize>
				<DialogFooter>
					<ConfirmButton onClick={() => {setOpenPizzaSize ? setOpenPizzaSizeDialog(false) : alert('Escolha o tamanho da pizza!');}}>
						Selecione o tamanho!
					</ConfirmButton>
				</DialogFooter>
			</Dialog>
			</>	
		 ) : (<div />) )
		}
		
