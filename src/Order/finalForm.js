import React from 'react';
import styled, { css } from "styled-components";
import { useState } from 'react';
import { pizzaRed } from '../Styles/colors';
import { GlobalStyle } from '../Styles/GlobalStyle';
import Geocode from "react-geocode";
import {  DialogShadow, DialogFooter, ConfirmButton } from "../FoodDialogue/FoodDialogue";


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
    height: 335px;
    position: fixed;
    z-index: 1001;
    box-shadow: 4px 0px 5px 5px grey;
    display: flex;
    flex-direction: column;
    padding: 0px;
    top: 75px;
    left: 217px;
    border-radius: 10px;
    font-size: 20px;
    color: red;
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

const FormMinimalText = styled.form`

    background-color: blue;

`

/* https://www.npmjs.com/package/react-geocode */

Geocode.setLanguage("pt-br");
Geocode.setRegion("br");


export function FinalForm(){
    const [useFinalFormDialog, setUseFinalFormDialog] = useState(true);


    const [formValues, setFormValue] = useState({

       /* rua: 'Qual rua você mora?', 
        numero: 'Número de sua casa p. ex. 52',
        cep: '10100-100',
        complemento: 'Casa, primeiro andar ou bloco A apartamento 01 ',
        observações: 'Casa com azulejo azul ou terceiro prédio depois da portaria',
        bairros: 'Barbalho' */

    });

  

    const handleInputChange = (e) => {

        
        const {name, value} = e.target;
        console.log('***handleInputChange', name, value);
        setFormValue({...formValues, [name]: value});

    };

    const handleSubmit = (e) => {

        e.preventDefault();
        const formData = new formData(e.target);
        const dataForm = Object.fromEntries(formData);

        console.log('*** handleSubmit', dataForm);
        setFormValue(e.target.value);

    };

      /* GOOGLE MAPS https://pt.stackoverflow.com/questions/130278/converter-cep-para-latitude-e-longitude-javascript */


      
      Geocode.fromAddress(40455-160).then(
        response => {
          const { lat, lng } = response.results[0].geometry.location;
          console.log(lat, lng);
        },
        error => {
          console.error(error);
        }
      );
  
  
  
  /* GOOGLE MAPS */

    return(
        useFinalFormDialog ?
    (
     
      <FormBox>
    <form onSubmit={handleSubmit}  >
        Nos diga seu bairro:
        <FormStyle><select name='bairros' onChange={handleInputChange} value={formValues.bairros}>
        <option value="laranja">Laranja</option>
        <option value="limao">Limão</option>
        <option selected value="coco">Coco</option>
        <option value="manga">Manga</option>
        </select></FormStyle>
        A rua que mora, número e cep por favor:
        <FormStyle><input type='text' name='rua' placeholder='Rua' onChange={handleInputChange}  /></FormStyle>
        <FormStyle><input type='text' name='numero' placeholder='Número' onChange={handleInputChange}  /></FormStyle>
        <FormStyle><input type='text' name='cep' placeholder='CEP 10100-100' onChange={handleInputChange}  /></FormStyle>
        Só falta um poquinho, complemento:
        <FormStyle><input type='text' name='complemento' placeholder='Complemento: casa ou bloco e apto' onChange={handleInputChange}  /></FormStyle>


        
    </form><DialogFooter><ConfirmButton>Pode mandar!</ConfirmButton></DialogFooter></FormBox>) : (<div/>)


);
}