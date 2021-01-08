import React, {useState} from 'react';
import {GlobalStyle} from './Styles/GlobalStyle';
import {Navbar} from "./Navbar/Navbar";
import {Banner} from "./Banner/Banner";
import {Menu} from "./Menu/Menu";
import {FoodDialog} from "./FoodDialogue/FoodDialogue";
import { Order } from "./Order/Order";
import { useOpenFood } from "./Hooks/useOpenFood";
import { useOrders } from "./Hooks/useOrders";
import { useTitle } from "./Hooks/useTitle";
import {bemvindo} from "./welcome/welcome";



 





function App() {
  const openFood = useOpenFood();
  const orders = useOrders();
  useTitle({...openFood, ...orders});

  return (
    <>
      <GlobalStyle/>
	  <bemvindo />
      <FoodDialog {...openFood} {...orders} />
      <Navbar/>
      <Order {...orders} {...openFood}/>
      <Banner/>
      <Menu {...openFood}/>
    
    </>  
  );
}

export default App;
