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