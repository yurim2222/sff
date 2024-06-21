import React, { SetStateAction, useEffect } from 'react'

import {
  Table,
  Header,
  HeaderRow,
  Body,
  Row,
  Cell,
} from "@table-library/react-table-library/table";
import {
  useSort,
  HeaderCellSort,
} from "@table-library/react-table-library/sort";
import { useTheme } from "@table-library/react-table-library/theme";
import styles from './DataTable.module.css';
import { usePagination } from "@table-library/react-table-library/pagination";
import { useState } from 'react';
import { tableProps } from '../atoms';



export default function DataTable({
  tableHeader,
  nodes,
  divideBorder = true,
  stripe = false,
  bgColor = "#fff",
  searchBox = true,
  page, }: tableProps) {

  const [search, setSearch] = useState("");
  const [searchCategory, setSearchCategory] = useState(tableHeader[0]);

  const sortedInitData: any = nodes;

  const [sortData, setSortData] = useState(sortedInitData);
  const handleSearch = (event: { target: { value: SetStateAction<string>; }; }) => {
    setSearch(event.target.value);
  };

  const data = {
    nodes: sortData.filter((item: any) => {
      if (typeof (item[searchCategory]) === 'string') {
        return item[searchCategory].toLowerCase().includes(search.toLowerCase())
      } else {
        return item[searchCategory].toString().includes(search);
      }
    }),
  };


  useEffect(() => {
    console.log(searchCategory)
  }, [searchCategory])

  const sortFns = {
    // 문자열 데이터 유형에 대한 정렬 함수
    string: (key: string) => (array: any[]) => {
      return array.sort((a, b) => a[key].localeCompare(b[key]));
    },
    // 숫자 데이터 유형에 대한 정렬 함수
    number: (key: string) => (array: any[]) => {
      return array.sort((a, b) => a[key] - b[key]);
    },
    // 다른 데이터 유형에 대한 기본 정렬 함수
    default: (key: string) => (array: any[]) => {
      return array;
    },
  };

  const getSortFn = (key: any) => {
    if (!isNaN(data.nodes[0][key])) {
      return sortFns.number(key);
    } else if (isNaN(data.nodes[0][key])) {
      return sortFns.string(key);
    } else {
      return (array: any) => array;
    }
  };

  const sortTable = (key: any, array: any) => {
    const sortFn = getSortFn(key);
    console.log(sortFn(array))
    return sortFn(array);
  };


  const sort = useSort(
    data,
    {
      onChange: onSortChange,
    },
    {
      sortIcon: {
        size: "10px",
      },
      sortFns: {
        sortData
      },
    }
  );
  const [reSort, setReSort] = useState(false);


  useEffect(() => {
    console.log('d', data)
    console.log('s', sortData)
    console.log('n', nodes)
    setReSort(false)
  }, [sortData, reSort]);


  function onSortChange(action: any, state: any) {
    setReSort(true);
    const reSortData = sortTable(state.sortKey, data.nodes);
    console.log(reSortData)
    setSortData(reSortData);
  }

  const theme = useTheme({
    Table: `
    .table{
      font-size:30px;
    }
    `,
    HeaderRow: `
        .th {
          border-bottom: 1px solid #a0a8ae;
        }
        background: ${bgColor};
      `,
    BaseCell: `
        &:not(:last-of-type) {
          border-right: 1px solid #a0a8ae;
        }

        padding: 8px 16px;
      `,
  });

  const pagination = usePagination(data, {
    state: page !== false ? page : undefined,
    onChange: onPaginationChange,
  });

  function onPaginationChange(action: any, state: any) {
    console.log(action, state);
  }

  return (
    <div className={`${divideBorder ? styles.divideBorder : ''} ${stripe ? styles.stripe : ''}`}>
      <div className={styles.tableUi}>
        <select onChange={(event) => setSearchCategory(event.target.value)}>
          {tableHeader.map(category => <option value={category} >{category}</option>)}
        </select>
        {searchBox && <label htmlFor="search">
          <input id="search" type="text" value={search} onChange={handleSearch} className={styles.searchInput} />
        </label>}
        <br />
        <Table data={data} theme={theme} sort={sort} pagination={pagination}>
          {(tableList: any[]) => (
            <>
              <Header>
                <HeaderRow>
                  {tableHeader.map(item => <HeaderCellSort sortKey={item}>{item}</HeaderCellSort>)}
                </HeaderRow>
              </Header>
              <Body>
                {tableList.map((item: any) => (
                  <Row key={item.id} item={item}>
                    {tableHeader.map((cell, index: number) => {
                      const cellData = (item[tableHeader[index].toLowerCase()])
                      return <Cell>{cellData.toString()}</Cell>
                    })}
                  </Row>
                ))}
              </Body>
            </>
          )}
        </Table>
        <br />
        <div style={{ textAlign: "center" }}>
          <span className={styles.pagination}>
            {pagination.state.getPages(data.nodes).map((_: any, index: any) => (
              <button
                key={index}
                type="button"
                style={{
                  fontWeight: pagination.state.page === index ? "bold" : "normal",
                }}
                onClick={() => pagination.fns.onSetPage(index)}
              >
                {index + 1}
              </button>
            ))}
          </span>
        </div>
        <br />
      </div>
    </div>
  )

}
