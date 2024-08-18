import { useEffect, useState } from "react";
import "./App.scss";
import { User } from "./lib/types";
import { List } from "./components/List";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");

  const fetchUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .catch((err) => console.log(err));
    setUsers(response);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSearch = (value: string) => {
    setSearchValue(value.toLowerCase());
  };

  const handleResetSearch = () => {
    setSearchValue("");
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchValue) ||
      user.email.toLowerCase().includes(searchValue) ||
      user.address.city.toLowerCase().includes(searchValue) ||
      user.company.name.toLowerCase().includes(searchValue)
  );

  return (
    <List
      data={filteredUsers}
      onSearch={handleSearch}
      onResetSearch={handleResetSearch}
      searchValue={searchValue}
    />
  );
}

export default App;
