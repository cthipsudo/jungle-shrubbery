import "./App.css";

// Components
import Profile from "./components/Profile";
import LinkBody from "./components/LinkBody";
import Footer from "./components/Footer";

function App() {

  return (
    <div className="app flex flex-col justify-center items-center">
      <div className="app-wrapper">
        <Profile />
        <LinkBody />
        <Footer />
      </div>
    </div>
  );
}

export default App;
