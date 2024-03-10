import './App.css';
import "./index.css"
import RouteManager from "./routes/routes";
import SmoothScroll from "./components/SmoothScroll/smooth-scroll";

function App() {
  return (
    <div className="App noscrollbar" >
      <SmoothScroll>
        <RouteManager/>
      </SmoothScroll>
    </div>
  );
}

export default App;
