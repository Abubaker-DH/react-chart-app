import "./App.css";
import BarChart from "./components/BarChart";
import DoughnutChart from "./components/DoughnutChart";
import LineChart from "./components/LineChart";

function App() {
  return (
    <div className="App">
      <div className="chart">
        <div className="line">
          {" "}
          <LineChart />
        </div>
        <div className="bar">
          <BarChart />
        </div>
        <div className="doughnut">
          <DoughnutChart />
        </div>
      </div>
    </div>
  );
}

export default App;
