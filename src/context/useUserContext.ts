import {createContext, useContext } from 'react';
import type { User } from '../types/user.types';


interface UserContextState {
  users: User[];
  loading: boolean;
  error: { error: unknown; message: string } | null;
  refetch: () => void;
}

export const UserContext = createContext<UserContextState | undefined>(undefined);

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};