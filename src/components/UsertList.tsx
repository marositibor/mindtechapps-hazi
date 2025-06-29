import React from 'react';
import { MaterialReactTable, type MRT_ColumnDef } from 'material-react-table';
import { useUserContext } from '../context/useUserContext';
import { type User } from '../types/user.types';
import { CircularProgress, Alert, Box, Typography } from '@mui/material';

export const UserList: React.FC = () => {
  const { users, loading, error } = useUserContext();

  const columns: MRT_ColumnDef<User>[] = [
    { accessorKey: 'name', header: 'Name' },
    { accessorKey: 'email', header: 'Email' },
    { accessorKey: 'username', header: 'Username' },
    { accessorKey: 'company.name', header: 'Company' },
  ];

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Alert severity="error" sx={{ mt: 4 }}>
        {error.message}
      </Alert>
    );
  }

  return (
    <Box mt={4}>
      <Typography variant="h5" gutterBottom>
        User List
      </Typography>
      <MaterialReactTable columns={columns} data={users} />
    </Box>
  );
};