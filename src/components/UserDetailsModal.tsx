import React, { useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  CircularProgress,
  Box,
} from '@mui/material';
import { useUserContext } from '../context/useUserContext';

interface Props {
  userId: number | null;
  onClose: () => void;
}

export const UserDetailsModal: React.FC<Props> = ({ userId, onClose }) => {
  const {
    selectedUser,
    selectedUserLoading,
    selectedUserError,
    loadUserById,
  } = useUserContext();

  useEffect(() => {
    if (userId !== null) {
      void loadUserById(userId);
    }
  }, [userId, loadUserById]);

  return (
    <Dialog open={userId !== null} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>User Details</DialogTitle>
      <DialogContent dividers>
        {selectedUserLoading && (
          <Box display="flex" justifyContent="center" py={4}>
            <CircularProgress />
          </Box>
        )}

        {selectedUserError && (
          <Typography color="error">{selectedUserError.message}</Typography>
        )}

        {selectedUser && !selectedUserLoading && !selectedUserError && (
          <Box display="flex" flexDirection="column" gap={1}>
            <Typography><strong>Name:</strong> {selectedUser.name}</Typography>
            <Typography><strong>Username:</strong> {selectedUser.username}</Typography>
            <Typography><strong>Email:</strong> {selectedUser.email}</Typography>
            <Typography><strong>Phone:</strong> {selectedUser.phone}</Typography>
            <Typography><strong>Website:</strong> {selectedUser.website}</Typography>
            <Typography><strong>Company:</strong> {selectedUser.company.name}</Typography>
            <Typography><strong>City:</strong> {selectedUser.address.city}</Typography>
          </Box>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};