import React, { useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  CircularProgress,
  Box,
} from "@mui/material";
import { useUserContext } from "../context/useUserContext";
import { AxiosError } from "axios";

interface Props {
  userId: number | null;
  onClose: () => void;
}

export const UserDetailsModal: React.FC<Props> = ({ userId, onClose }) => {
  const { selectedUser, selectedUserLoading, selectedUserError, loadUserById } =
    useUserContext();

  useEffect(() => {
    if (userId !== null) {
      void loadUserById(userId);
    }
  }, [userId, loadUserById]);

  const handleRetry = () => {
    if (userId !== null) {
      void loadUserById(userId);
    }
  };

  const isNotFoundError =
    selectedUserError?.error instanceof AxiosError &&
    selectedUserError.error.response?.status === 404;

  return (
    <Dialog open={userId !== null} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>User Details</DialogTitle>
      <DialogContent dividers>
        {selectedUserLoading && (
          <Box display="flex" justifyContent="center" py={4}>
            <CircularProgress />
          </Box>
        )}

        {selectedUserError && !selectedUserLoading && (
          <Box display="flex" flexDirection="column" gap={2}>
            <Typography color="error">
              {isNotFoundError
                ? "User not found (404)."
                : selectedUserError.message}
            </Typography>

            {!isNotFoundError && (
              <Button variant="outlined" onClick={handleRetry}>
                Retry
              </Button>
            )}
          </Box>
        )}

        {selectedUser && !selectedUserLoading && !selectedUserError && (
          <Box display="flex" flexDirection="column" gap={1}>
            <Typography>
              <strong>Name:</strong> {selectedUser.name}
            </Typography>
            <Typography>
              <strong>Username:</strong> {selectedUser.username}
            </Typography>
            <Typography>
              <strong>Email:</strong> {selectedUser.email}
            </Typography>
            <Typography>
              <strong>Phone:</strong> {selectedUser.phone}
            </Typography>
            <Typography>
              <strong>Website:</strong> {selectedUser.website}
            </Typography>
            <Typography>
              <strong>Company:</strong> {selectedUser.company.name}
            </Typography>
            <Typography>
              <strong>City:</strong> {selectedUser.address.city}
            </Typography>
          </Box>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};
