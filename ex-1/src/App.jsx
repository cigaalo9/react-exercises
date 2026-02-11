import "./App.css";
import UserCard from "./UserCard";

function App() {
  return (
    <div className="app">
      <h1>User Information</h1>

      <UserCard 
        name="John Doe" 
        email="john.doe@example.com" 
      />
    </div>
  );
}

export default App;
