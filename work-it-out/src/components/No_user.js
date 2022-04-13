import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./styles/card.css";
import {useNavigate } from 'react-router-dom'

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};


export default function NoUser() {

  const navigate = useNavigate();

  
  return (
    <>
    <Modal
        open={true}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h3" component="h2">
            Must Log In
          </Typography>
          <Box id="modal-modal-description" sx={{ mt: 2 }}>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Users must be logged in to create new workouts.
                  Please Log in to begin.
                </Typography>
                <br></br>
            <div className="centerButton">
              <Button
                variant="contained"
                color="warning"
                onClick={() => navigate('/login')}
              >
               Login
              </Button>
            </div>
          </Box>
        </Box>
      </Modal>
      </>
  );
}