import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Heading from "./components/Heading";
import DisplayCounter from "./components/DisplayCounter";
import { useDispatch } from "react-redux";
import CustomMath from "./components/CustomMath";
function App() {
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };
  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  const handleReset = () => {
    dispatch({ type: "RESET" });
  };
  return (
    <center>
      <div className="card" style={{ width: "50%" }}>
        <div className="card-body">
          <Heading />
          <DisplayCounter />
          <br />
          <button
            type="button"
            className="btn btn-success"
            onClick={handleIncrement}
          >
            +
          </button>
          &nbsp;
          <button type="button" className="btn btn-danger" onClick={handleDecrement}>
            -
          </button>
          &nbsp;
          <button type="button" className="btn btn-primary" onClick={handleReset}>
            Reset
          </button>
          <CustomMath/>
        </div>
      </div>
    </center>
  );
}

export default App;
