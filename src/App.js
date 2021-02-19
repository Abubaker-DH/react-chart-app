import "./App.css";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";

function App() {
  return (
    <div className="App">
      <div className="chart">
        <LineChart></LineChart>
        <BarChart></BarChart>
      </div>
    </div>
  );
}

export default App;
