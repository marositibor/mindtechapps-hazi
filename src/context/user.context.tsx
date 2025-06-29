import React, { useCallback, useEffect, useState } from "react";
import { type User } from "../types/user.types";
import { fetchUsers, fetchUserById } from "../api/users.api";
import { UserContext } from "./useUserContext";

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<{
    error: unknown;
    message: string;
  } | null>(null);

  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [selectedUserLoading, setSelectedUserLoading] = useState(false);
  const [selectedUserError, setSelectedUserError] = useState<{
    error: unknown;
    message: string;
  } | null>(null);

  const loadUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchUsers();
      setUsers(data);
    } catch (err) {
      setError({
        error: err,
        message:
          err instanceof Error ? err.message : "Unknown error fetching users",
      });
    } finally {
      setLoading(false);
    }
  };

  const loadUserById = useCallback(async (id: number) => {
    try {
      setSelectedUser(null);
      setSelectedUserLoading(true);
      setSelectedUserError(null);
      const user = await fetchUserById(id);
      setSelectedUser(user);
    } catch (err) {
      setSelectedUserError({
        error: err,
        message:
          err instanceof Error ? err.message : "Unknown error fetching user",
      });
    } finally {
      setSelectedUserLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadUsers();
  }, []);

  return (
    <UserContext.Provider
      value={{
        users,
        loading,
        error,
        selectedUser,
        selectedUserLoading,
        selectedUserError,
        refetch: () => void loadUsers(),
        loadUserById,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
