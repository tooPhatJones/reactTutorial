'use strict';

import React, { Component } from "react";
import { AgGridReact } from "ag-grid-react";

import rowData from "./data";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const boolEnum = {
  true: "Yes",
  false: "No"
};

const colorEnum = {
  "#ff0000": "Red",
  "#00ff00": "Green",
  "#0000ff": "Blue"
};

export class CustomFilter2 extends Component {
  columnDefs = [
    {
      field: "name",
      headerName: "Name"
    },
    {
      field: "isActive",
      headerName: "Active",
      type: ["booleanColumn"]
    },
    {
      field: "color",
      headerName: "Color",
      type: ["colorColumn"]
    }
  ];

  onGridReady = params => {
    this.api = params.api;
    this.columnApi = params.columnApi;
  };

  render() {
    return (
      <div className="grid-container">
        <div id="myGrid" style={{ height: 400, width: 600 }} className="ag-grid ag-theme-alpine">
          <AgGridReact
            columnDefs={this.columnDefs}
            rowData={rowData}
            suppressRowClickSelection
            defaultColDef={{
              sortable: true,
              flex: 1,
              minWidth: 200,
              resizable: true,
              cellClass: "cell-wrap-text ag-grid-cell",
              autoHeight: true,
              filter: "agTextColumnFilter",
              filterParams: {
                buttons: ["reset", "apply"],
                closeOnApply: true,
                suppressAndOrCondition: true
              }
            }}
            columnTypes={{
              booleanColumn: {
                ...getEnumColumnParams(boolEnum)
              },
              colorColumn: {
                ...getEnumColumnParams(colorEnum)
              }
            }}
            animateRows
            rowModelType="clientSide"
            getRowNodeId={item => {
              return item.id;
            }}
            onGridReady={this.onGridReady}
          />
        </div>
      </div>
    );
  }
}


const getEnumColumnParams = enumMap => {
    return {
      cellRenderer: params => {
        // console.log(JSON.stringify(params.data))
        // console.log("data; " +params.data)
        if (!params.data) return "";
        const { value } = params;
        // console.log("valeu:"+value);
        return enumMap[value];
      },
      filterParams: {
        buttons: ["reset", "apply"],
        closeOnApply: true,
        filterOptions: [
          "empty",
          ...Object.keys(enumMap).map(key => {
            return {
              displayKey: key,
              displayName: enumMap[key],
              test: function(filterValue, cellValue) {
                return cellValue === key;
              },
              hideFilterInput: true
            };
          })
        ],
        suppressAndOrCondition: true
      }
    };
  };
  