import React, { SetStateAction, useEffect } from 'react'
import x from './image/x.png';
import o from './image/o.png';

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
import stylesCustom from './DataTableCustom.module.css';
import { usePagination } from "@table-library/react-table-library/pagination";
import { useState } from 'react';
import Button from './Button';
import { Confirm } from './Confirm';
import { tableProps } from '../atoms';


/**
  - table 칸 배열을 변경하고 싶을 때 
-  ＊ {
-  --data-table-library_grid-template-columns: minmax(0px, 160px)
-    minmax(0px, 160px) minmax(0px, 160px) minmax(0px, 2fr) minmax(0px, 160px) !important;
- }
-와 같이 변경해준다. 단 다른 테이블에 영향을 끼칠 수 있으니 잘 확인해야한다.
- custom table의 경우 직접 table컴포넌트를 수정한다.
 **/


export default function DataTableWithButton({
  tableHeader,
  nodes,
  divideBorder = true,
  stripe = false,
  bgColor = "#fff",
  searchBox = true,
  page,
  handleChange }: tableProps) {

  const [search, setSearch] = useState("");
  const [searchCategory, setSearchCategory] = useState(tableHeader[0]);

  const handleSearch = (event: { target: { value: SetStateAction<string>; }; }) => {
    setSearch(event.target.value);
  };

  const data = {
    nodes: nodes.filter((item) => {
      if (typeof (item[searchCategory]) === 'string') {
        return item[searchCategory].toLowerCase().includes(search.toLowerCase())
      } else {
        return item[searchCategory].toString().includes(search);
      }
    }
    ),
  };

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
    return sortFn(array);
  };

  const sortedInitData: any = data.nodes;

  const [sortData, setSortData] = useState(sortedInitData);

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
    setReSort(false)
  }, [sortData, reSort]);

  function onSortChange(action: any, state: any) {
    const reSortData = sortTable(state.sortKey, data.nodes);
    setSortData(reSortData);
    setReSort(true);
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
          background: ${bgColor};
        }
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
    <div className={`${divideBorder ? styles.divideBorder : ''} ${stripe ? styles.stripe : ''} ${stylesCustom.custonTable}`}>
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

                {tableList.map((item: any, index) => (
                  <Row key={index} item={item}>
                    <Cell>{item.name}</Cell>
                    <Cell>{item.gender}</Cell>
                    <Cell>{item.age}</Cell>
                    <Cell>
                      <Confirm
                        button={<Button size='120px'>send to E-mail</Button>}
                        dialogMsg="이메일을 보내시겠습니까?"
                        layout="basic"
                        submitHandle={() => { }}
                      />
                    </Cell>
                    <Cell>{item.submit ? <img src={o} alt='o' /> : <img src={x} alt='x' />}</Cell>
                  </Row>
                ))}
              </Body>
              {/* 테이블 CSS커스텀은 stylesCustom 으로 지정된 css module파일에서 별도 관리 */}
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
