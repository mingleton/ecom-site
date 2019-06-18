import {
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL,
    SET_CART_PRODUCTS,
    ADD_CART_PRODUCT
} from './types';

export function setPurchaseDetail(_id) {
    return({
        type: SET_PURCHASE_DETAIL,
        payload: _id
    })
}

export function addCartProduct(product) {
    return ({
        type: ADD_CART_PRODUCT,
        payload: product
    })
}

export function fetchCartProducts() {
    return ({
        type: SET_CART_PRODUCTS,
        payload: [
            {
                _id: 0,
                product: {
                _id: 0,
                title: 'JavaScript in the Browser',
                description: 'Cool sticker that shows stuff',
                price: '1.99',
                belongsTo: [0 ,1],
                imageUrl: 'http://via.placeholder.com/80x80'
                },
                quantity: 2
            },
            {
                _id: 1,
                product: {
                _id: 1,
                title: 'Graph Database',
                description: 'Cool sticker that shows stuff',
                price: '1.99',
                belongsTo: [0 ,6],
                imageUrl: 'http://via.placeholder.com/80x80'
            },
            quantity: 1
        }

        ]
    })
}

export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                total: 19.69,
                orderNumber: 'A00069696',
                orderDate: new Date().toDateString,
                creditCard: '-0000',
                user: {
                    name: 'Michael Ingleton',
                    shippingAddress: '2134 west state',
                }
            },
            {
                _id: 1,
                total: 19.69,
                orderNumber: '1738ldkjle',
                orderDate: new Date().toDateString,
                creditCard: '-0000',
                user: {
                    name: 'Kawhi Leonard',
                    shippingAddress: '3737 west state',
                }
            },
            {
                _id: 2,
                total: 19.69,
                orderNumber: 'A00099696',
                orderDate: new Date().toDateString,
                creditCard: '-0000',
                user: {
                    name: 'Greg Ingleton',
                    shippingAddress: '2134 east state',
                }
            },
            {
                _id: 3,
                total: 19.69,
                orderNumber: 'A00069696',
                orderDate: new Date().toDateString,
                creditCard: '-0000',
                user: {
                    name: 'Michael Ingleton',
                    shippingAddress: '2134 west state',
                }
            },
            {
                _id: 4,
                total: 19.60,
                orderNumber: 'AAAAA000043',
                orderDate: new Date().toDateString,
                creditCard: '-0000',
                user: {
                    name: 'Michael Jordan',
                    shippingAddress: '2134 south state',
                }
            },
            {
                _id: 5,
                total: 19.69,
                orderNumber: 'KELA49333',
                orderDate: new Date().toDateString,
                creditCard: '-0000',
                user: {
                    name: 'Michael Phelps',
                    shippingAddress: '2134 west oak',
                }
            },
            
        ]
    })
}