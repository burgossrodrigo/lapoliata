import React from 'react';
import styled, { css } from "styled-components";
import { useState } from 'react';
import { pizzaRed } from '../Styles/colors';
import { GlobalStyle } from '../Styles/GlobalStyle';
import Geocode from "react-geocode";
import {  DialogShadow, DialogFooter, ConfirmButton,  } from "../FoodDialogue/FoodDialogue";
import { formatPreco } from "../Data/FoodData";
import { getPrice } from "../FoodDialogue/FoodDialogue";

const database = window.firebase.database();


const sharedStyles = css`
  background-color: white;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;

const FormBox = styled.div` 

    background-color: white;
    width: 500px;
    position: fixed;
    z-index: 1001;
    box-shadow: 4px 0px 5px 5px grey;
    display: flex;
    flex-direction: column;
    padding: 0px;
    top: 75px;
    border-radius: 10px;
    font-size: 20px;
    color: red;
`;

const FormBanner = styled.div`

	background-color: ${pizzaRed};
	color: white;
    padding-bottom: 2px;
    border-radius: 0px 0px 5px 5px;

`;

const StyledInput = styled.input`

    display: block;
    width: 100%;
    ${sharedStyles};

`;


const FormStyle = styled.form`

padding: 6px;
padding-right: 30px;
`;



/* https://www.npmjs.com/package/react-geocode */

Geocode.setLanguage("pt");
Geocode.setRegion("br");

export function sendOrder(orders, {email, displayName}){

  function RetornaDataHoraAtual(){
    var dNow = new Date();
    var localdate = dNow.getDate() + '/' + (dNow.getMonth()+1) + '/' + dNow.getFullYear() + '  '  + dNow.getHours() + ':' + dNow.getMinutes();
    return localdate;
    }
    
  
  const newOrderRef = database.ref('orders').push();
  const newOrder = orders.map(order => {
    return Object.keys(order).reduce((acc, orderKey) => {
      if (!order[orderKey]) {
        // undefined value
        return acc;
      }
      return {
        ...acc,
        [orderKey]: order[orderKey]
      };
    }, {});
  });
  
  newOrderRef.set({
    
    order: newOrder,
    email,
    displayName,
    horaLocal: RetornaDataHoraAtual()
  });  
  
}

export function sendUserAdress(finalFormValues, {email, displayName}){

  function RetornaDataHoraAtual(){
    var dNow = new Date();
    var localdate = dNow.getDate() + '/' + (dNow.getMonth()+1) + '/' + dNow.getFullYear() + '  '  + dNow.getHours() + ':' + dNow.getMinutes();
    return localdate;
    }
    
  
  const newEnderecoRef = database.ref('endereço').push();
  const newAdress = finalFormValues.map(endereco => {
    return Object.keys(endereco).reduce((acc, enderecoKey) => {
      if (!endereco[enderecoKey]) {
        // undefined value
        return acc;
      }
      return {
        ...acc,
        [enderecoKey]: endereco[enderecoKey]
      };
    }, {});
  });
  
  newEnderecoRef.set({
    
    endereco: newAdress,
    email,
    displayName,
    horaLocal: RetornaDataHoraAtual()
  });  
  
}




export function FinalForm({orders, sendOrder, sendUserAdress, order, logado, login, endereco, setOrders, setUseFinalFormDialog, useFinalFormDialog, setUsePizzaSize, openPizzaSize}){
	
	
    
	function precoTotal(){
		
		if(openPizzaSize === 2){return formatPreco(42,90)};
		if(openPizzaSize === 3){return formatPreco(47,90)};
		if(openPizzaSize === 4){return formatPreco(52,90)};
		
	}

	
   



	
    const [finalFormValues, setFinalFormValues] = useState({});



  

    const handleInputChange = (e) => {

        
        const {name, value, type, checked} = e.target;
        console.log('***handleInputChange', name, value);
		const isCheckBox = type === 'checkbox';
		const data = finalFormValues[name] || {};
		if(isCheckBox){data[value] = checked;}
		
		const newValue = isCheckBox ? data: value;
		setFinalFormValues({...finalFormValues, [name]: newValue});
		console.log('***HANDLE INPUT CHANGE', data);
		
		
    };

    const handleSubmit = (e) => {

        e.preventDefault();
        const formData = new formData(e.target);
        const dataForm = Object.fromEntries(formData);

        console.log('*** handleSubmit', dataForm);
        setFinalFormValues(e.target.value);

    };

      /* GOOGLE MAPS https://pt.stackoverflow.com/questions/130278/converter-cep-para-latitude-e-longitude-javascript */


      
      /*Geocode.fromAddress().then(
        response => {
          const { lat, lng } = response.results[0].geometry.location;
          console.log(lat, lng);
        },
        error => {
          console.error(error);
        }
      );*/
  
  
  
  /* GOOGLE MAPS */

    return(
        
		useFinalFormDialog  ? 	
			<FormBox>
			
				<FormBanner>Total:<div><>{precoTotal()}</></div></FormBanner>
				<form onSubmit={handleSubmit}  >
				
					Nos diga seu bairro:
					<FormStyle><select name='bairros' placeholder='--' onChange={handleInputChange} value={finalFormValues.bairros || ''}>
					<option value="laranja">--</option>
					<option value="laranja">Laranja</option>
					<option value="limao">Limão</option>
					<option selected value="coco">Coco</option>
					<option value="manga">Manga</option>
					</select></FormStyle>
					A rua que mora, número e cep por favor:
					<FormStyle><input type='text' name='rua' placeholder='Rua' onChange={handleInputChange}  /></FormStyle>
					<FormStyle><input type='text' name='numero' placeholder='Número' onChange={handleInputChange}  /></FormStyle>
					
					Só falta um poquinho, complemento:
					<FormStyle><input type='text' name='complemento' placeholder='Complemento: casa ou bloco e apto' onChange={handleInputChange}  /></FormStyle>
				
				
					Que tal um refrigerante:
					<FormStyle><select name='refrigerante' placeholder='--' onChange={handleInputChange} value={finalFormValues.refrigerante || ''}>
					<option value="laranja">--</option>
					<option value="limao">Refrigerante de cola Litro</option>
					<option selected value="coco">Guaraná Litro</option>
	
					</select></FormStyle>
					
					
					Forma de pagamento:
					<FormStyle><select name='pagamento' placeholder='--'  onChange={handleInputChange} value={finalFormValues.pagamento || ''}>
					<option value="laranja">--</option>
					<option value="dinheiro">Dinheiro</option>
					<option value="cartão">Cartão</option>
					</select></FormStyle>
					{finalFormValues.pagamento === 'dinheiro' ? (<FormStyle><input type='text' name='troco' placeholder='Troco pra quanto?' onChange={handleInputChange}  /></FormStyle>) : (<div/>)}
					
				

				
				</form><DialogFooter><ConfirmButton onclick={() => {
				handleSubmit();
				sendOrder(orders, logado);
				sendUserAdress(endereco, logado);
				setOrders([]);
				setUseFinalFormDialog(false);
				setUsePizzaSize(false);
				
				
				}
				
				}>Pode mandar!
				</ConfirmButton>
				</DialogFooter>
				
			</FormBox> : <div />

 
);
}


/* sendOrder(orders, logado); */