import React, { useState, useEffect } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { CustomFilter } from './CustomFilter'
import { CustomFilter2} from './CustomFilter2'
import {ExternalFilter} from './ExternalFilter'
import {CustomFilterOptions} from './CustomFilterOptions'

export function OnGridReady() {
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);


    const [rowData, setRowData] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/sample-data/rowData.json')
            .then(result => result.json())
            .then(rowData => setRowData(rowData))
    }, []);

    function onGridReady(params) {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);
    }

    const onButtonClick = e => {
        const selectedNodes = gridApi.getSelectedNodes()
        const selectedData = selectedNodes.map(node => node.data)
        const selectedDataStringPresentation = selectedData.map(node => node.make + ' ' + node.model).join(', ')
        alert(`Selected nodes: ${selectedDataStringPresentation}`)
    }

    return (
        <div>
            <h1>basic ag grid table with filtering sorting one row that has checkboxes that will be passed to an alert when you click "get selected rows"</h1>
            <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
                <button onClick={onButtonClick}>Get selected rows</button>
                <AgGridReact
                    rowSelection="multiple"
                    onGridReady={onGridReady}
                    rowData={rowData}>
                    <AgGridColumn field="make" sortable={true} filter={true} ></AgGridColumn>
                    <AgGridColumn field="model" sortable={true} filter={true} ></AgGridColumn>
                    <AgGridColumn field="price" sortable={true} filter={true} checkboxSelection={true}></AgGridColumn>
                </AgGridReact>
            </div>
            <h1>custom filter 1, coppied from ag grid website</h1>
            <CustomFilter />
            <h1>custom filter 2, coppied from a random codepen</h1>
            <CustomFilter2/>
            <h1> external filter</h1>
            <ExternalFilter/>
            <h1> Custom Filter Options</h1>
            <CustomFilterOptions/>
        </div>

    );
};
