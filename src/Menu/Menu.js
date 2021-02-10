import React from "react";
import styled from "styled-components";
import { food } from "../Data/FoodData";
import { Food, FoodGrid, FoodLabel } from "./FoodGrid";
import { formatPreco } from "../Data/FoodData";



const MenuStyled = styled.div`

   
    margin: 0px 400px 50px 20px;
    height: 1000px;
    width: 100%;

    @media(max-width: 400px){ 
        width: 100%; 
        margin: 0px; 
      }

` 

export function Menu({ setOpenFood, openPizzaSize, orders }) {


    return( 
        <MenuStyled>
                {Object.entries(food).map(([tipoName, foods]) => (
                <>
                    <h1>{tipoName}</h1>
                    <FoodGrid>
                        {foods.map(food =>(
                            <>
                            <Food img={food.img} onClick={() => orders.length >= openPizzaSize  ? alert('Sua pizza não comporta tantos sabores, que tal pedir uma maior?') : setOpenFood(food)} >
                                <FoodLabel>
                                    <div>{food.name}</div>
                                    <div>{formatPreco(food.preco)}</div>
                                </FoodLabel>
                                    
                            </Food>
                            </>
                        ))}
                    </FoodGrid>
                </>
            ))}
    
        </MenuStyled>
    );
                
}