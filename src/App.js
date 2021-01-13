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
import { useAuthentication } from "./Hooks/useTitle";




auth.onAuthStateChanged(function(user){
	
		console.log(user);
	
}, function(error){
	
	console.log(error);

});



function App() {
  const openFood = useOpenFood();
  const orders = useOrders();
  useTitle({...openFood, ...orders});
  const auth = useAuthentication();

  return (
    <>
		
      <GlobalStyle/>
      <FoodDialog {...openFood} {...orders} />
      <Navbar/>
      <Order {...orders} {...openFood}/>
      <Banner/>
      <Menu {...openFood}/>
    
    </>  
  );
}

export default App;
