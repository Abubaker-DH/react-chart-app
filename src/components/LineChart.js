import React from "react";
import { Line } from "react-chartjs-2";

function LineChart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"], //X
    datasets: [
      //frist data set
      {
        label: "Sales for 2021 (M)",
        data: [3, 5, 2, 1, 4], //data for each month Y
        backgroundColor: ["rgba(255, 200, 88, 0.3)"], //for style the line
        borderColor: ["rgba(255, 200, 88, 0.3)"],
        pointBackgroundColor: "rgba(255, 200, 88, 0.3)", // for style data point
        pointBorderColor: "rgba(255, 200, 88, 0.3)",
      },
      // second data set
      {
        label: "Sales for 2020 (M)",
        data: [1, 2, 4, 3, 5],
        backgroundColor: ["rgba(100, 50, 74, 0.2)"],
        borderColor: ["rgba(100, 50, 74, 0.2)"],
        pointBackgroundColor: "rgba(100, 50, 74, 0.2)",
        pointBorderColor: "rgba(100, 50, 74, 0.2)",
      },
    ],
  };

  // for yAxes step size and title
  const options = {
    title: {
      display: true,
      text: "Line Chart",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0, //start at
            max: 6, //ended at
            stepSize: 1,
          },
        },
      ],
    },
  };

  return <Line data={data} options={options}></Line>;
}

export default LineChart;
