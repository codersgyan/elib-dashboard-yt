import axios from 'axios';
import useTokenStore from '@/store';

const api = axios.create({
	// todo: move this value to env variable.
	baseURL: import.meta.env.VITE_API_URL,
	headers: {
		'Content-Type': 'application/json',
	},
});

api.interceptors.request.use((config) => {
	const token = useTokenStore.getState().token;
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});

export const login = async (data: { email: string; password: string }) =>
	api.post('/api/users/login', data);

export const register = async (data: {
	name: string;
	email: string;
	password: string;
}) => api.post('/api/users/register', data);

export const getBooks = async () => api.get('/api/books');

export const getBook = async (id: string) => api.get(`/api/books/${id}`);

export const createBook = async (data: FormData) =>
	api.post('/api/books', data, {
		headers: {
			'Content-Type': 'multipart/form-data',
		},
	});
