import "./App.css";

// Components
import Profile from "./components/Profile";
import LinkBody from "./components/LinkBody";

function App() {

  return (
    <div className="app flex flex-col justify-center items-center">
      <div className="app-wrapper">
        <Profile />
        <LinkBody />
      </div>
    </div>
  );
}

export default App;
