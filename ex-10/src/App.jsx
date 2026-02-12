import UserList from "./UserList";

function App() {
  const users = [
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
    { id: 3, name: "Ali Hassan", email: "ali.hassan@example.com" },
  ];

  return (
    <>
      <h1>User List</h1>
      <UserList users={users} />
    </>
  );
}

export default App;
