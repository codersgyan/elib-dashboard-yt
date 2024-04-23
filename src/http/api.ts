import axios from 'axios';

const api = axios.create({
    // todo: move this value to env variable.
    baseURL: 'http://localhost:5513',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const login = async (data: { email: string; password: string }) =>
    api.post('/api/users/login', data);

export const register = async (data: { name: string; email: string; password: string }) =>
    api.post('/api/users/register', data);
