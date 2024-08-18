import { useEffect, useState } from "react";
import "./App.scss";
import { User } from "./lib/types";
import { UsersList } from "./components/UsersList";

function App() {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .catch((err) => console.log(err));
    setUsers(response);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return <UsersList users={users} />;
}

export default App;
