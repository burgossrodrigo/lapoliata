import styled from "styled-components";
import React from "react";
import ListBox from 'react-listbox';

const ToppingGrind = styled.div`

    display: grid;
    grid-template-collums: repeat(3, 1fr);


`;



const CheckboxLabel = styled.label`

    cursor:pointer;

`

export function Toppings(){

    const options = [
        { label: 'Média', value: 2 },
        { label: 'Grande', value: 3 },
        { label: 'Família', value: 4 },
      ];
      

    return(
        <ToppingGrind>
            <CheckboxLabel>
                <ListBox options={options} />;
            </CheckboxLabel>
        </ToppingGrind>
)
}