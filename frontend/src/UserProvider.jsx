import { useEffect, useState } from 'react'
import UserContext from './UserContext';


const UserProvider = ({ children}) => {
  const [name, setName] = useState(localStorage.getItem("name") || "");
  const [id, setId] = useState(localStorage.getItem("id") || "");
  const [role, setRole] = useState(localStorage.getItem("role") || "");

  useEffect(() => {
    localStorage.setItem("name", name);
    localStorage.setItem("id", id);
    localStorage.setItem("role", role);
  }, [name, id, role]);

  return (
    <UserContext.Provider value={{ name, setName, id, setId, role, setRole }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
