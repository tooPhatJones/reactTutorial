'use strict';

import React, { useState } from 'react';
import { render } from 'react-dom';
import { AgGridReact, AgGridColumn } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import data from './testDat.json'

export const CustomFilterOptions = () => {
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);
  const [rowData, setRowData] = useState(null);

  const onGridReady = (params) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);

    const httpRequest = new XMLHttpRequest();
    const updateData = (data) => {
      setRowData(data);
    };

    updateData(data);

    // httpRequest.open(
    //   'GET',
    //   'https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/javascript-grid-filter-provided-simple/custom-filter-options/data/data.json'
    // );
    // httpRequest.send();
    // httpRequest.onreadystatechange = () => {
    //   if (httpRequest.readyState === 4 && httpRequest.status === 200) {
    //     updateData(JSON.parse(httpRequest.responseText));
    //   }
    // };
  };

  const printState = () => {
    var filterState = gridApi.getFilterModel();
    console.log('filterState: ', filterState);
  };

  const saveState = () => {
    window.filterState = gridApi.getFilterModel();
    console.log('filter state saved');
  };

  const restoreState = () => {
    gridApi.setFilterModel(window.filterState);
    console.log('filter state restored');
  };

  const resetState = () => {
    gridApi.setFilterModel(null);
    console.log('column state reset');
  };

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div className="example-wrapper">
        <div style={{ marginBottom: '5px' }}>
          <button onClick={() => printState()}>Print State</button>
          <button onClick={() => saveState()}>Save State</button>
          <button onClick={() => restoreState()}>Restore State</button>
          <button onClick={() => resetState()}>Reset State</button>
        </div>

        <div
          id="myGrid"
          style={{
            height: '800px',
            width: '100%',
          }}
          className="ag-theme-alpine"
        >
          <AgGridReact
            defaultColDef={{
              flex: 1,
              minWidth: 150,
              sortable: true,
              filter: true,
            }}
            localeTextFunc={function (key, defaultValue) {
              if (key === 'notEqualNoNulls') {
                return '* Not Equals (No Nulls) *';
              }
              return defaultValue;
            }}
            onGridReady={onGridReady}
            rowData={rowData}
          >
            <AgGridColumn field="athlete" filterParams={containsFilterParams} />
            <AgGridColumn
              field="age"
              minWidth={120}
              filter="agNumberColumnFilter"
              filterParams={filterParams}
            />
            <AgGridColumn
              field="date"
              filter="agDateColumnFilter"
              filterParams={equalsFilterParams}
            />
            <AgGridColumn
              field="country"
              filterParams={notEqualsFilterParams}
            />
            <AgGridColumn field="gold" filter="agNumberColumnFilter" />
            <AgGridColumn field="silver" filter="agNumberColumnFilter" />
            <AgGridColumn field="bronze" filter="agNumberColumnFilter" />
            <AgGridColumn field="total" filter={false} />
          </AgGridReact>
        </div>
      </div>
    </div>
  );
};

var filterParams = {
  filterOptions: [
    'empty',
    {
      displayKey: 'evenNumbers',
      displayName: 'Even Numbers',
      test: function (filterValue, cellValue) {
        return cellValue != null && cellValue % 2 === 0;
      },
      hideFilterInput: true,
    },
    {
      displayKey: 'oddNumbers',
      displayName: 'Odd Numbers',
      test: function (filterValue, cellValue) {
        return cellValue != null && cellValue % 2 !== 0;
      },
      hideFilterInput: true,
    },
    {
      displayKey: 'blanks',
      displayName: 'Blanks',
      test: function (filterValue, cellValue) {
        return cellValue == null;
      },
      hideFilterInput: true,
    },
  ],
  suppressAndOrCondition: true,
};
var containsFilterParams = {
  filterOptions: [
    'contains',
    {
      displayKey: 'startsA',
      displayName: 'Starts With "A"',
      test: function (filterValue, cellValue) {
        return cellValue != null && cellValue.indexOf('a') === 0;
      },
      hideFilterInput: true,
    },
    {
      displayKey: 'startsN',
      displayName: 'Starts With "N"',
      test: function (filterValue, cellValue) {
        return cellValue != null && cellValue.indexOf('n') === 0;
      },
      hideFilterInput: true,
    },
  ],
};
var equalsFilterParams = {
  filterOptions: [
    'equals',
    {
      displayKey: 'equalsWithNulls',
      displayName: 'Equals (with Nulls)',
      test: function (filterValue, cellValue) {
        if (cellValue == null) return true;
        var parts = cellValue.split('/');
        var cellDate = new Date(
          Number(parts[2]),
          Number(parts[1] - 1),
          Number(parts[0])
        );
        return cellDate.getTime() === filterValue.getTime();
      },
    },
  ],
  comparator: function (filterLocalDateAtMidnight, cellValue) {
    var dateAsString = cellValue;
    if (dateAsString == null) return -1;
    var dateParts = dateAsString.split('/');
    var cellDate = new Date(
      Number(dateParts[2]),
      Number(dateParts[1]) - 1,
      Number(dateParts[0])
    );
    if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
      return 0;
    }
    if (cellDate < filterLocalDateAtMidnight) {
      return -1;
    }
    if (cellDate > filterLocalDateAtMidnight) {
      return 1;
    }
  },
  browserDatePicker: true,
};
var notEqualsFilterParams = {
  filterOptions: [
    'notEqual',
    {
      displayKey: 'notEqualNoNulls',
      displayName: 'Not Equals without Nulls',
      test: function (filterValue, cellValue) {
        if (cellValue == null) return false;
        return cellValue !== filterValue;
      },
    },
  ],
};
