import React, { useEffect, useRef, useState } from 'react'
import * as echarts from 'echarts';

export default function EChartCompare({ type, title, labels, data }: any) {
  console.log(data)


  let lineOption = {
    // 차트 제목
    title: {
      text: title,
    },
    legend: {
      data: labels,
    },
    // x축 라벨
    xAxis: [
      {
        type: "category",
        data: ["무게(g)", "가격(만 단위)", "줌 배율"],
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: data,
    toolbox: {
      show: true,
      feature: {
        saveAsImage: { show: true },
      },
    },
  };


  const chartRef = useRef(null);



  const [option, setOption] = useState(labels);
  useEffect(() => {
    if (chartRef.current) {
      const chart = echarts.init(chartRef.current);

      chart.setOption(lineOption);
    }
  }, [option, chartRef]);

  return (
    <div
      ref={chartRef}
      style={{
        width: "100%",
        height: '100%',
        minHeight: "300px",
        minWidth: "500px"
      }}
    />
  )
}
