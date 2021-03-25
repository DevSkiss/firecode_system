import { Line } from "react-chartjs-2";
import styles from "./linechartstyle.module.css";

const LineChart = (props) => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Tacoban City",
        fill: false,
        lineTension: 0.1,
        backgroundColor: props.hover,
        borderColor: props.hover,
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: props.hover,
        pointHoverBorderColor: props.hover,
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };
  return (
    <div>
      <h2>Collection Line Chart</h2>
      <Line data={data} />
    </div>
  );
};

export default LineChart;
