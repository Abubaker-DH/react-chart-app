import React from "react";
import { Bar } from "react-chartjs-2";

function BarChart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"], //X
    datasets: [
      //frist data set
      {
        label: "Sales for 2021 (M)",
        data: [3, 5, 2, 1, 4], //data for each month Y
        backgroundColor: [
          "rgba(255, 250, 79, 1)",
          "rgba(255, 250, 79, 1)",
          "rgba(255, 250, 79, 1)",
          "rgba(255, 250, 79, 1)",
          "rgba(255, 250, 79, 1)",
        ], //for style the line
        borderColor: [
          "rgba(255, 250, 79, 1)",
          "rgba(255, 250, 79, 1)",
          "rgba(255, 250, 79, 1)",
          "rgba(255, 250, 79, 1)",
          "rgba(255, 250, 79, 1)",
        ],
      },
      // second data set
      {
        label: "Sales for 2020 (M)",
        data: [1, 2, 4, 3, 5],
        backgroundColor: [
          "rgba(255, 150, 74, 1)",
          "rgba(255, 150, 74, 1)",
          "rgba(255, 150, 74, 1)",
          "rgba(255, 150, 74, 1)",
          "rgba(255, 150, 74, 1)",
        ],
        borderColor: [
          "rgb1, 150, 74, 1)",
          "rgb1, 150, 74, 1)",
          "rgb1, 150, 74, 1)",
          "rgb1, 150, 74, 1)",
          "rgb1, 150, 74, 1)",
        ],
      },
    ],
  };

  // for yAxes step size and title
  const options = {
    title: {
      display: true,
      text: "Bar Chart",
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

  return <Bar data={data} options={options} />;
}

export default BarChart;
