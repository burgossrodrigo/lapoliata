import React from 'react';
import { setState } from 'react';
import styled from 'styled-components';
import { DialogFooter, DialogContent, ConfirmButton } from '../FoodDialogue/FoodDialogue';
import { formatPreco } from "../Data/FoodData";
import { getPrice } from "../FoodDialogue/FoodDialogue";

const database = window.firebase.database();


const OrderStyled = styled.div`

    position: fixed;
    right: 0px;
    top: 30px;
    width: 340px;
    background-color: white;
    border: 1px solid blue;
    height: calc(100% - 50px);
    z-index: 10;
    box-shadow: 4px 0px 5px 5px grey;
    display: flex;
    flex-direction: column;

`;

const OrderContent = styled(DialogContent)`

    padding: 20px;
    height: 100%;

`;

const OrderContainer = styled.div`

    padding: 10px 0px;
    border-bottom: 1px solid grey;

`;

const OrderItem = styled.div`
nfn
    padding: 10px 0hhhpx;
    display: grid;
    grid-template-collum: 20px 150px 20px 60px;
    justify-content: space-between;
    

`;






export function sendOrder(orders, {email, displayName}){
	
	const newOrderRef = database.ref('orders').push();
	const newOrder = orders.map(order => {
    return Object.keys(order).reduce((acc, orderKey) => {
      if (!order[orderKey]) {
        // undefined value
        return acc;
      }
      return {
        ...acc,
        [orderKey]: order[orderKey]
      };
    }, {});
  });
  
	newOrderRef.set({
		
		order: newOrder,
		email,
		displayName
	});
}





export function Order({ orders, setOrders, setOpenFood,logado, login, setOpenOrderDialog, setOpenOrderContainer, openOrderContainer }){

    const subtotal = orders.reduce((total, order) => {


        return total + getPrice(order);


    } ,0);
    
    const taxa = 0;
    const total = subtotal + taxa; 

    const deleteItem = index => {

        const newOrders = [...orders];
        newOrders.splice(index, 1);
        setOrders(newOrders);


    }
    
    
	
    return (<OrderStyled>





                { orders.length === 0 ?  
                <OrderContent>
                    Carrinho vazio.
                </OrderContent> : 
                
                    (<OrderContent>
                    { "  " }
                        
                       <OrderContainer> Seu pedido:</OrderContainer>  
                       {" "}{orders.map((order, index) => (
                            <OrderContainer>
                                <OrderItem onClick={() => {
                                    
                                    setOpenFood({...orders, index})
                                
                                }}>
                                    <div>{order.quantity}</div>
                                    <div>{order.name}</div>
                                    <div style={{ cursor:"pointer" }} onClick={() => {deleteItem(index);}}>✂️</div>
                                    <div>{formatPreco(getPrice(order))}</div>
                                </OrderItem>    
                            </OrderContainer>
                       ))}
                       <OrderContainer>
                           <OrderItem>
                            <div>Subtotal</div>
                            <div>{formatPreco(subtotal)}</div>
                            <div></div>
                           </OrderItem>
                           <OrderItem>
                            <div>Taxa de entrega</div>
                            <div>{formatPreco(taxa)}</div>
                            <div></div>
                           </OrderItem>
                           <OrderItem>
                            <div>Conta</div>
                            <div>{formatPreco(total)}</div>
                            <div></div>
                           </OrderItem>
                       </OrderContainer>

                    </OrderContent>
                )}
                <DialogFooter>
					
					{orders.length > 0 && <ConfirmButton onClick={() => {
          if (logado) {
			  setOpenOrderDialog(true);
            sendOrder(orders, logado);
          } else {
            login();
          }
					}}>Finalizar pedido</ConfirmButton> }
                </DialogFooter>    
               
			</OrderStyled>
);
}