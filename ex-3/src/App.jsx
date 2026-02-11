import UserCard from "./UserCard";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>User List</h1>

      <UserCard name="John Doe" email="john.doe@example.com" />

      <UserCard name="Jane Smith" email="jane.smith@example.com" />

      <UserCard name="Ali Hassan" email="ali.hassan@example.com" />
    </div>
  );
}

export default App;
