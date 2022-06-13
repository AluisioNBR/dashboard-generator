import { useEffect, useRef } from 'react'
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
} from 'chart.js';

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);


export function DashboardViewer({ dashboardColor, dashboardOptions }){
  const canvasRef = useRef(null)
  let chart

  useEffect(() => {
    const canvas = canvasRef.current.getContext('2d')
    chart = new Chart(canvas, dashboardOptions)

    return () => chart.destroy()
  }, [canvasRef, chart, dashboardOptions])

  return (
    <div id="DashboardViewer">
      <canvas
        ref={canvasRef}
        style={{ backgroundColor: dashboardColor }}
      ></canvas>
    </div>
  )
}