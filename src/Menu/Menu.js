import React from "react";
import styled from "styled-components";
import { food } from "../Data/FoodData";
import { Food, FoodGrid, FoodLabel } from "./FoodGrid";
import { formatPreco } from "../Data/FoodData";


const MenuStyled = styled.div`

   
    margin: 0px 400px 50px 20px;
    height: 1000px;

`

export function Menu({ setOpenFood, openPizzaSize, openPizzaSizeDialog }) {


    return( 
        <MenuStyled>
                {Object.entries(food).map(([tipoName, foods]) => (
                <>
                    <h1>{tipoName}</h1>
                    <FoodGrid>
                        {foods.map(food =>(

                            <Food img={food.img} onClick={() => {
                               ( openPizzaSizeDialog === false ?
                                setOpenFood(food);) : (order.lenght === openPizzaSize ? alert('Sua pizza só suporta' openPizzaSize' fatias. Que tal pedir uma maior?'); )

                            }} >
                                <FoodLabel>
                                    <div>{food.name}</div>
                                    <div>{formatPreco(food.preco)}</div>
                                </FoodLabel>    
                            </Food>

                        ))}
                    </FoodGrid>
                </>
            ))}
    
        </MenuStyled>
    );
                
}