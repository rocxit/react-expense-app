import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
    const totalMaximun = Math.max(...props.dataPoints.map((val) => val.value));

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMaximun} label={dataPoint.label} />
      ))}
    </div>
  );
};

export default Chart;
