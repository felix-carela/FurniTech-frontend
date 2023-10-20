import api from './apiConfig'

export const getAllItems = async () => {
    try{
        const response = await api.get('/items/')
        return response.data
    } catch (error) {
        console.log(error)
        return [];
    }
}

interface signUpParams {
    username:string;
    password:string;
    email:string;
}

export const signup = async ({username, email, password} : signUpParams) => {
    try{
        const response = await api.post('/signup/', {
            username,
            password,
            email
        })

        // if(response){
        //     localStorage.setItem(username)
        // }
        return response.data
    }catch(error){
        console.log(error)
    }
}


interface createOrderParams {
    username: string;
    order_items: { item: number; quantity: number }[];
}


export const createOrder = async ({ username, order_items }: createOrderParams) => {
    try {
        const response = await api.post('/order-create/', {
            username,
            order_items
        });
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

export const getOrders = async (username:string) => {
    try {
        const response = await api.get(`orders/by-username/${username}/`);
        return response.data;
    } catch (err) {
        console.log(err);
        return [];
    }
}


