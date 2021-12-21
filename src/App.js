import "./App.css";

// Components
import Profile from "./components/Profile";
import LinkBody from "./components/LinkBody";
import Footer from "./components/Footer";
import FFXIVbox from "./components/FFXIVbox";

function App() {

  return (
    <div className="app flex flex-col justify-center items-center">
      <div className="app-wrapper">
        <Profile />
        <LinkBody />  
      </div>
      <FFXIVbox />
      <Footer />
    </div>
  );
}

export default App;
