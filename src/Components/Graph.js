import React from 'react'
import { Bar } from "react-chartjs-2";

function Graph({data_obj}) {

const data = {
  labels: Object.keys(data_obj),
  datasets: [
    {
      label: "Count",
      data: Object.values(data_obj),
      fill: true,
      hoverBackgroundColor: "rgba(0, 95, 255, 1)",
      hoverBorderColor:"rgba(0, 0, 0, 1)",
      hoverBorderWidth: 3,
      barPercentage: 1,
      backgroundColor: "rgba(0, 115, 255, 0.6)",
      borderWidth: 2,
      borderColor: "rgba(0, 95, 255, 1)"
    }
    
  ]
};

  const bar = (<Bar data={data} width={1920} height={1080}
    options= {{
      maintainAspectRatio : true,
      responsive: true,
      scales: {
        xAxes: [{
          ticks: {
            fontSize: 16,
            autoSkip: false,
            maxRotation: 90,
            minRotation: 90
          }
        }],
        yAxes: [{
          ticks: {
            fontSize: 16,
          }
        }]
      }
    }}
  />);

    return (
      <>
        {bar}
      </>
    )
}

export default Graph
