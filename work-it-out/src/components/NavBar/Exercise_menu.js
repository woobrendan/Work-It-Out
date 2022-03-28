import React, {useState} from "react";
import {useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


export default function ExerciseMenu() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="Nav-Menu">
    <Button
      aria-controls={open ? 'basic-menu' : undefined}
      aria-haspopup="true"
      aria-expanded={open ? 'true' : undefined}
      onClick={handleClick}
      variant="contained"
      color="warning"
      size="small"
    >
    Exercises
    </Button>
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
    >
      <MenuItem onClick={() => navigate('/workout/1')}>Chest</MenuItem>
      <MenuItem onClick={() => navigate('/workout/2')}>Shoulder</MenuItem>
      <MenuItem onClick={() => navigate('/workout/3')}>Back</MenuItem>
      <MenuItem onClick={() => navigate('/workout/4')}>Lower Body</MenuItem>
      <MenuItem onClick={() => navigate('/workout/5')}>Arm</MenuItem>
    </Menu>
  </div> 
  );
}