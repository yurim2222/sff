import React, { useEffect, useRef, useState } from 'react'
import * as echarts from 'echarts';

export default function EChartCircle({ title, labels, data }: any) {

  let lineOption = {
    title: {
      text: title,
      left: "center",
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      left: "left",
    },
    toolbox: {
      show: true,
      feature: {
        saveAsImage: { show: true },
      },
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: "50%",
        data: data.resultList.map((item: any) => {
          return { value: item.count, name: item.name };
        }),
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
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
