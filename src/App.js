import "./App.css";
import BarChart from "./components/BarChart";
import DoughnutChart from "./components/DoughnutChart";
import LineChart from "./components/LineChart";

function App() {
  return (
    <div className="App">
      <div className="chart">
        <LineChart></LineChart>
        <BarChart></BarChart>
        <DoughnutChart></DoughnutChart>
      </div>
    </div>
  );
}

export default App;
