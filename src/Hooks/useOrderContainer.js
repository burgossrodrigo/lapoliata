import React, { useState} from 'react';

export function useOrderContainer(){

	const [openOrderContainer, setOpenOrderContainer] = useState(false);

	return {openOrderContainer, setOpenOrderContainer};

};