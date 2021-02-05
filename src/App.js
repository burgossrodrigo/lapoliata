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
import { useAlert } from 'react-alert';
import { usePizzaSize } from './Hooks/usePizzaSize';
import { usePizzaSizeDialog } from './Hooks/usePizzaSize';
import { PizzaSizeDialog } from './welcome/PizzaSizeDialog';
import { FinalForm } from './Order/finalForm';
import Geocode from "react-geocode";

 







function App() {
Geocode.setApiKey("AIzaSyC_YYlEmoA0zK021Sb5bsz8Jem0N0WjXnY");  
const alert = useAlert()
const openFood = useOpenFood();
const orders = useOrders();
useTitle({...openFood, ...orders});
const auth = useAuthentication();
const orderDialog = useOrderDialog();
const orderContainer = useOrderContainer();
const pizzaSizeDialog = usePizzaSizeDialog();
const pizzaSize = usePizzaSize();
console.log(pizzaSize);
console.log(orders.lenght);

 

  return (
    <>
		
  <GlobalStyle/>
	<OrderDialog {...orderDialog} {...orders}/>
  <FinalForm {...orders} {...pizzaSize} {...pizzaSizeDialog} />
  <PizzaSizeDialog {...pizzaSize} {...pizzaSizeDialog} />
  <FoodDialog {...openFood} {...orders} {...pizzaSize} />
	<Navbar {...auth} {...orderContainer}/>
  <Order {...pizzaSize} {...orderContainer} {...orderDialog} {...orders} {...openFood} {...auth}/>
  <Banner/>
  <Menu {...pizzaSize} {...openFood} {...orders} {...pizzaSizeDialog}/>
    
    </>  
  );
}

export default App;
