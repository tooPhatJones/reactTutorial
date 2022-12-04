'use strict';

import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import PartialMatchFilter from './partialMatchFilter';

export class CustomFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columnDefs: [
        { field: 'row' },
        {
          field: 'name',
          filter: 'partialMatchFilter',
          menuTabs: ['filterMenuTab'],
        },
      ],
      defaultColDef: {
        editable: true,
        sortable: true,
        flex: 1,
        minWidth: 100,
        filter: true,
        resizable: true,
      },
      rowData: createRowData(),
      frameworkComponents: { partialMatchFilter: PartialMatchFilter },
    };
  }

  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    params.api.sizeColumnsToFit();
  };

  onClicked = () => {
    this.gridApi.getFilterInstance('name', function (instance) {
      instance.getFrameworkComponentInstance().componentMethod('Hello World!');
    });
  };

  render() {
    return (
      <div style={{ width: '75%', height: '100%', margin: "50px" }}>
        <div style={{ height: '500px' }} className="example-wrapper">
          <button
            style={{ marginBottom: '5px' }}
            onClick={() => this.onClicked()}
            className="btn btn-primary"
          >
            Invoke Filter Instance Method
          </button>
          <div
            id="myGrid"
            style={{
              height: '100%',
              width: '100%',
            }}
            className="ag-theme-alpine"
          >
            <AgGridReact
              columnDefs={this.state.columnDefs}
              defaultColDef={this.state.defaultColDef}
              rowData={this.state.rowData}
              frameworkComponents={this.state.frameworkComponents}
              onGridReady={this.onGridReady}
            />
          </div>
        </div>
      </div>
    );
  }
}

function createRowData() {
  return [
    {
      row: 'Row 1',
      name: 'Michael Phelps',
    },
    {
      row: 'Row 2',
      name: 'Natalie Coughlin',
    },
    {
      row: 'Row 3',
      name: 'Aleksey Nemov',
    },
    {
      row: 'Row 4',
      name: 'Alicia Coutts',
    },
    {
      row: 'Row 5',
      name: 'Missy Franklin',
    },
    {
      row: 'Row 6',
      name: 'Ryan Lochte',
    },
    {
      row: 'Row 7',
      name: 'Allison Schmitt',
    },
    {
      row: 'Row 8',
      name: 'Natalie Coughlin',
    },
    {
      row: 'Row 9',
      name: 'Ian Thorpe',
    },
    {
      row: 'Row 10',
      name: 'Bob Mill',
    },
    {
      row: 'Row 11',
      name: 'Willy Walsh',
    },
    {
      row: 'Row 12',
      name: 'Sarah McCoy',
    },
    {
      row: 'Row 13',
      name: 'Jane Jack',
    },
    {
      row: 'Row 14',
      name: 'Tina Wills',
    },
  ];
}
