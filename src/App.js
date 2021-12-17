import "./App.css";

// Components
import Profile from "./components/Profile";
import LinkBody from "./components/LinkBody";

function App() {
  return (
    <div className="app">
      <div className="app-wrapper">
        <Profile />
        <LinkBody />
      </div>
    </div>
  );
}

export default App;
