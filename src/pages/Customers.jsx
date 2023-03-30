import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Sort, Filter, Page, Selection, Toolbar, Edit, Inject } from '@syncfusion/ej2-react-grids'

import { customersData, customersGrid } from "../data/dummy"
import { Header } from "../components"
const Customers = () => {
    return (
        <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
            <Header category="Page" title="Customers" />
            <GridComponent
                id="gridcomp"
                dataSource={customersData}
                // to show limited data and show other data in different page
                allowPaging
                // to allow sorting
                allowSorting

                toolbar={['Delete']}

                // for allowing editing and deleting data
                editSettings={{ allowDeleting: true, allowEditing: true }}
                width='auto'
            >
                <ColumnsDirective>
                    {customersGrid.map((item, index) =>
                        <ColumnDirective key={index} {...item} />
                    )}
                </ColumnsDirective>
                <Inject services={[Sort, Filter, Page, Toolbar, Edit, Selection]} />
            </GridComponent>
        </div>
    )
}

export default Customers
