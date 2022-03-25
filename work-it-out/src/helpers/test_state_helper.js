import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from "../helpers/UserContext";

export default function useApplicationData() {
  const { user } = useContext(UserContext);
  const [state, setState] = useState({
    statHistory: [],
    user: user.id,
  });
  
  useEffect(() => {
    axios.get(`http://localhost:8080/api/workouts/users/${user.id}`)
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