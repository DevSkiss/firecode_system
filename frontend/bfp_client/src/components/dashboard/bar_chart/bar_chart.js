import { HorizontalBar } from "react-chartjs-2";
import styles from "./barchartstyle.module.css";

const BarChart = (props) => {
  const data = {
    labels: props.label,
    datasets: [
      {
        label: "Monthly Collection",
        backgroundColor: "rgba(28,9,92,0.2)",
        borderColor: "#d21",
        borderWidth: 3,
        hoverBackgroundColor: props.hover,
        hoverBorderColor: props.hover,
        data: props.data,
      },
    ],
  };
  return (
    <div>
      <h2>{props.title}</h2>
      <HorizontalBar
        data={data}
        width={100}
        height={40}
        options={{
          maintainAspectRatio: true,
        }}
      />
    </div>
  );
};

export default BarChart;
