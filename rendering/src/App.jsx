import "./App.css";
import UserGreeting from "./UserGreeting";

function App() {
  return (
    <>
      <UserGreeting isLoggedIn={true} username="John Doe" />
    </>
  );
}

export default App;
