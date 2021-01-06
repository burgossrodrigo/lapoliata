export function formatPreco(preco){

    return preco.toLocaleString('pt-BR', {

        style: 'currency',
        currency: 'BRL'

    }) 

}

export const foodItens = [

    {

        name: 'Cheese Pizza',
        img: '/img/pexels-ana-madeleine-uribe-2762942.jpg',
        tipo: 'Pizza',
        preco: 5


    },

    {

        name: 'Pepperoni Pizza',
        img: '/img/pepperoni.jpg',
        tipo: 'Pizza',
        preco: 5

    },

    {

        name: 'Portuguesa Pizza',
        img: '/img/portuguesa.jpg',
        tipo: 'Pizza',
        preco: 5

    },

    {

        name: 'Calabresa Pizza',
        img: '/img/calabresa.jpg',
        tipo: 'Pizza',
        preco: 5

    },

    {

        name: 'Refrigerante',
        img: '/img/coca.jpg',
        tipo: 'Bebida',
        preco: 5

    },

    {

        name: 'Cerveja',
        img: '/img/cerveja.jpg',
        tipo: 'Bebida',
        preco: 5

    }


];

export const food = foodItens.reduce((res, food) => {

    if(!res[food.tipo]){

        res[food.tipo] = [];

    }

    res[food.tipo].push(food);
        return res

}, {});