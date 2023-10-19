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