import React from "react";
import { Dialog, DialogContent, DialogShadow, DialogFooter, ConfirmButton } from "../FoodDialogue/FoodDialogue";

export function OrderDialog({ openOrderDialog, setOpenOrderDialog, setOrders, openPizzaSizeDialog }){
	
	return openOrderDialog && openPizzaSizeDialog === false ?
		<>
			<DialogShadow onClick={() => {setOrders([]); setOpenOrderDialog();}}  />
			<Dialog>
				<DialogContent>
					<h2>Recebemos seu pedido, vamos te mandar um email confirmando a saída de nosso motoboy.</h2>
				</DialogContent>
				<DialogFooter>
					<ConfirmButton onClick={() => {setOrders([]); setOpenOrderDialog();}}>
						Acho que vou pedir outra.
					</ConfirmButton>
				</DialogFooter>
			</Dialog>
			
		</> : <div />
	
}