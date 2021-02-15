import React, { useState} from 'react';

export function useFinalFormDialog(){
	
	 const [useFinalFormDialog, setUseFinalFormDialog] = useState(true);
	 
	 return {useFinalFormDialog, setUseFinalFormDialog};
	
};




      /* rua: 'Qual rua você mora?', 
        numero: 'Número de sua casa p. ex. 52',
        cep: '10100-100',
        complemento: 'Casa, primeiro andar ou bloco A apartamento 01 ',
        observações: 'Casa com azulejo azul ou terceiro prédio depois da portaria',
        bairros: 'Barbalho' */