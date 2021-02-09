import React from 'react';
import { useState } from 'react';

export function useOrderDialog(){
	
		const [openOrderDialog, setOpenOrderDialog] = useState(false);
	
		return {openOrderDialog, setOpenOrderDialog};
	
	};
