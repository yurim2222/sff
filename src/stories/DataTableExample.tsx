import React, { useEffect, useState } from 'react'
import DataTableWithInput from './DataTableWithInput'

/**
- custom table의 경우 직접 table컴포넌트를 수정한다.
- input 요소가 전부 들어가지 않는 경우 셀을 map을 통해 만들지 않고 정적으로 생성해주었다.
 **/
export default function DataTableExample({ tableHeader, nodes, stripe, divideBorder, bgColor, searchBox, page, modifyData }: any) {
  const [data, setData] = useState(nodes);
  const handleChange = (data: any) => {
    setData(() => data)
  }

  useEffect(() => {
    console.log(data)
  }, [data]);

  return (
    <div><DataTableWithInput
      tableHeader={tableHeader}
      nodes={data}
      stripe={stripe}
      divideBorder={divideBorder}
      bgColor={bgColor}
      searchBox={searchBox}
      modifyData={modifyData}
      page={page}
      handleChange={(data) => handleChange(data)}></DataTableWithInput></div>
  )
}
