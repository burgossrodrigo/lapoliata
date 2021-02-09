import React from "react";
import { Dialog, DialogContent, DialogShadow, DialogFooter, ConfirmButton } from "../FoodDialogue/FoodDialogue";
import { useState } from 'react';

export function OrderDialog({ openOrderDialog, setOpenOrderDialog, setOrders, openPizzaSizeDialog, orders }){

	const [orderFormValues, setOrderFormValues] = useState({bio: 'p.ex Tenho alergia a camarão'});

	const handleInputChange = (e) => {

        
        const {name, value} = e.target;
        console.log('***handleInputChange', name, value);
        setOrderFormValues({...setOrderFormValues, [name]: value});

    };
	
	return openOrderDialog === true && openPizzaSizeDialog === false ?
		<>
			<DialogShadow onClick={() => {setOrders([]); setOpenOrderDialog();}}  />
			<Dialog>
				<DialogContent>
					<h2>Total da conta: {orders.price}</h2>
					<h2>Falta pouco! Que tal um refrigerante?</h2>
					<form>
						
						<label><input type='radio' value='cola' name="refrigerante" cheked={orderFormValues === 'cola'}/></label>
						<label><input type='radio' value='guaraná' name="refrigerante" cheked={orderFormValues === 'guaraná'}/></label>
						<textarea name="bio"></textarea>

					</form>
				</DialogContent>
				<DialogFooter>
					<ConfirmButton onClick={() => {setOrders([]); setOpenOrderDialog();}}>
						Acho que vou pedir outra.
					</ConfirmButton>
				</DialogFooter>
			</Dialog>
			
		</> : <div />
	
}