import * as SecureStore from 'expo-secure-store';

export const setToken = async (token: string) => {
    try {
        await SecureStore.setItemAsync('token', token);
    } catch (error) {
        console.error(error);
    }
}

export const getToken = async () => {
    try {
        return await SecureStore.getItemAsync('token');
    } catch (error) {
        console.error(error);
    }
}

export const removeToken = async () => {
    try {
        await SecureStore.deleteItemAsync('token');
    } catch (error) {
        console.error(error);
    }
}
