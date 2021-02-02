import React from "react";
import styled from "styled-components";
import {Title} from "../Styles/title";
import {pizzaRed} from "../Styles/colors";
import { useQuantity } from "../Hooks/useQuantity";

const QuantityInputStyle = styled.input`

    font-size: 18px;
    width: 20px;
    text-align: center;
    border: none;
    outline: none;

`;

const IncrementButton = styled.div`
  width: 23px;
  color: ${pizzaRed};
  font-size: 20px;
  text-align: center;
  cursor: pointer;
  line-height: 23px;
  margin: 0px 10px;
  border: 1px solid ${pizzaRed};
  ${({ disabled }) =>
    disabled &&
    `opacity: 0.5; 
     pointer-events: none; 
     `}
  &:hover {
    background-color: #ffe3e3;
  }
`;



const IncrementContainer= styled(Title)`

    display: flex;
    height: 24px;

`

export function QuantityInput({quantity}){

    return <IncrementContainer>
                    <div>Quantidade: </div>
                    <IncrementButton disabled={quantity.value === 3} 
                    onClick={() => {quantity.setValue(quantity.value + 1);}} 
                    >
                        
                    </IncrementButton>
                    <QuantityInputStyle {...quantity}/>
                    <IncrementButton disabled={quantity.value === 1} onClick={() => {quantity.setValue(quantity.value - 1)}} >-</IncrementButton>   
            </IncrementContainer>

} 

// () => {quantity.setValue(quantity.value - 1);}