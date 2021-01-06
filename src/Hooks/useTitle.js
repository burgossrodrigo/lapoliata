import {useEffect} from 'react';

export function useTitle({ openFood, orders }) {

    useEffect(() => {

        if (openFood) {

            document.title = JSON.stringify(openFood.name);

        } else {

            document.title = orders.length === 0 ? `Vai pedir o que?` : `Tem [${orders.length}] na lista`;
        
        }

        

    });

}