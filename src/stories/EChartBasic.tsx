import React, { useEffect, useRef, useState } from 'react'
import * as echarts from 'echarts';

export default function EChartBasic({ type, title, labels, data }: any) {

  useEffect(() => {
    console.log(data)
  }, [])

  const lineOption = {
    // 차트 제목
    title: {
      text: title,
    },
    // x축 라벨
    xAxis: {
      data: labels,
      axisLabel: {
        interval: 0, // 모든 라벨을 표시하기 위해
        formatter: function (value: any) {
          return value.split("\n").join("\n\n"); // 개행 추가
        },
      },
    },
    yAxis: {},
    series: [
      {
        type: type,
        data: data.resultList.total,
      },
    ],
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
