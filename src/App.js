import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import NavBar from "./Components/Navbar";
import MainContainer from "./Components/MainContainer";

function App() {
  return (
    <div>
      <NavBar />
      <div className="App">
        <div>
          <Sidebar />
          <MainContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
