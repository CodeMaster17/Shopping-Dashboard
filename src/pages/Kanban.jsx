import React from 'react'
import { KanbanComponent, ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-kanban'
import { kanbanData, kanbanGrid } from "../data/dummy"
import { Header } from '../components'
const Kanban = () => {
    return (
        <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
            <Header category="Page" title="Kanban" />
            <KanbanComponent
                id="kanaban"
                dataSource={kanbanData}
                cardSettings={{ contentField: 'Summary', headerField: 'Id' }}

                // items appear we add this line
                keyField='Status'
            >
                <ColumnsDirective>
                    {kanbanGrid.map((item, index) =>
                        <ColumnDirective key={index} {...item} />
                    )}
                </ColumnsDirective>

            </KanbanComponent>
        </div>

    )
}

export default Kanban
