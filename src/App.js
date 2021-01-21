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
import { useAuthentication } from "./Hooks/useAuthentication";
import { useOrderDialog } from './Hooks/useOrderDialog';
import { OrderDialog } from "./Order/OrderDialog";
import { useOrderContainer } from "./Hooks/useOrderContainer";

 







function App() {
const openFood = useOpenFood();
const orders = useOrders();
useTitle({...openFood, ...orders});
const auth = useAuthentication();
const orderDialog = useOrderDialog();
const orderContainer = useOrderContainer();
 

  return (
    <>
		
    <GlobalStyle/>
	<OrderDialog {...orderDialog} {...orders}/>
    <FoodDialog {...openFood} {...orders} />
	<Navbar {...auth} />
	<Order {...orderContainer} {...orderDialog} {...orders} {...openFood} {...auth}/>
    <Banner/>
    <Menu {...openFood}/>
    
    </>  
  );
}

export default App;
