import "./App.css";
import About from "./components/About/About";
import Gallary from "./components/Gallary/Gallary";
import Home from "./components/Home/Home";
import Parent from "./components/Parent/Parent";

function App() {
  return (
    <>
      <div className="Container m-auto">
        <div className="row d-flex">
          <div className="col-md-6 bg-info">
            <Home />
          </div>
          <div className="col-md-6 bg-danger">
            <About />
          </div>
          <div className="col p-5 bg-black">
            <h1 className="text-light">Class Component</h1>
            <Parent />
          </div>

        </div>
          <div className="col p-5 bg-black">
            <h1 className="text-light">Function Component</h1>
            <Gallary />
          </div>
      </div>
    </>
  );
}

export default App;
