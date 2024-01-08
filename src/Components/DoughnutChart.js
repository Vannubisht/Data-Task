import React, { useEffect, useRef } from 'react';
import '../App.css';

const DoughnutChart = ({ doughnet, doughnet2 }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    console.log(doughnet, doughnet2);
    const total = (doughnet + doughnet2).toFixed(2);
    console.log(total)

    // const percentage1 = (doughnet / total) * 100;
    // const percentage2 = (doughnet2 / total) * 100;
    const percentage1 = total > 0 ? (doughnet / total) * 100 : 0;
    const percentage2 = total > 0 ? (doughnet2 / total) * 100 : 0;


    drawDoughnut(ctx, percentage1, percentage2);
  }, [doughnet, doughnet2]);

  const drawDoughnut = (ctx, percentage1, percentage2) => {

    const radius = 100;
    const lineWidth = 50;
    const centerX = chartRef.current.width / 2;
    const centerY = chartRef.current.height / 2;
    const startAngle1 = 0;
    const endAngle1 = (percentage1 / 100) * 2 * Math.PI;
    const startAngle2 = endAngle1;
    const endAngle2 = startAngle2 + (percentage2 / 100) * 2 * Math.PI;

    ctx.stroke();

    ctx.clearRect(0, 0, chartRef.current.width, chartRef.current.height);



    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, startAngle1, endAngle1);
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = '#FF4500'; // First color
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, startAngle2, endAngle2);
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = '#39D5D8'; // Second color
    ctx.stroke();
    // console.log(doughnet, doughnet2)
    // console.log(percentage1,percentage2 )
  };

  return <canvas ref={chartRef} className="doughnut-chart" width={300} height={300} />;
};

export default DoughnutChart;