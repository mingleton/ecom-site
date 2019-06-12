import {
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL
} from './types';

export function setPurchaseDetail() {
    return({
        type: SET_PURCHASE_DETAIL,
        payload: _id
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
                orderDate: new Date(),
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
                orderDate: new Date(),
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
                orderDate: new Date(),
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
                orderDate: new Date(),
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
                orderDate: new Date(),
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
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Michael Phelps',
                    shippingAddress: '2134 west oak',
                }
            },
            
        ]
    })
}