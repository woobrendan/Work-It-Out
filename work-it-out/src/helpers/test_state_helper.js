import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useApplicationData() {
  const [state, setState] = useState({
    statHistory: [],
    user: 1,
  });
  
  useEffect(() => {
    axios.get(`http://localhost:8080/api/workouts/users/1`)
    .then((res) => {
        setState(prev => ({
          ...prev,
          statHistory: res.data
        }));
    })
    .catch(err => console.log("Error:", err))
    },[]);

  return {
    state
  };
};