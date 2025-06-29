import { useState, useEffect } from "react";
import { type User } from "../types/user.types";
import { fetchUsers } from "../api/users.api";
import { UserContext } from "./useUserContext";

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<{
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
          err instanceof Error ? err.message : "An unknown error occurred",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void loadUsers();
  }, []);

  const refetch = () => void loadUsers();

  return (
    <UserContext.Provider value={{ users, loading, error, refetch }}>
      {children}
    </UserContext.Provider>
  );
};
