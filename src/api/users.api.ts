import axios from 'axios';
import { type User } from '../types/user.types.ts';

const API_BASE = 'https://jsonplaceholder.typicode.com/users';

export const fetchUsers = async (): Promise<User[]> => {
  const response = await axios.get<User[]>(API_BASE);
  return response.data;
};

export const fetchUserById = async (id: number): Promise<User> => {
  const response = await axios.get<User>(`${API_BASE}/${String(id)}`);
  return response.data;
};