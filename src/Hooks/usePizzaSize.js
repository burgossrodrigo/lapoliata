import React from 'react';
import { useState } from 'react';

export function usePizzaSizeDialog(){
	
		const [openPizzaSizeDialog, setOpenPizzaSizeDialog] = useState(true);
	
		return {openPizzaSizeDialog, setOpenPizzaSizeDialog};
	
    };
    
export function usePizzaSize(){
	
		const [openPizzaSize, setOpenPizzaSize] = useState();
	
		return {openPizzaSize, setOpenPizzaSize};
	
	};

	
	export function useQuantityTwo(defaultQuantityTwo) {
		const [valueTwo, setValueTwo] = useState(defaultQuantityTwo || 0);
	  
		function onChange(e) {
		  while (!(+e.target.value >= 1)) {
			setValueTwo(1);
			return;
		  }
		  setValueTwo(+e.target.value)
		   }
	  
		return {
		  valueTwo,
		  setValueTwo,
		  onChange
		};
	  }