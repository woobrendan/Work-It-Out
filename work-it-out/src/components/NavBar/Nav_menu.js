import React, {useState} from "react";
import {useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


export default function NavMenu() {
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
      variant="outlined"
      size="small"
      color="warning"
    >
      Menu
    </Button>
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
    >
      <MenuItem onClick={() => navigate('/muscleGroups')}>Muscle Groups</MenuItem>
      <MenuItem onClick={() => navigate('/Profile')}>Workout History</MenuItem>
      <MenuItem onClick={() => navigate('/workouts/new')}>New Workout</MenuItem>
    </Menu>
  </div> 
  );
}