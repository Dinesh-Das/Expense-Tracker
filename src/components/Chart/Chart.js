import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    const valueArray = props.dataPoints.map(point => point.value);
    const totalMaximum =Math.max(...valueArray);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
          key={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
