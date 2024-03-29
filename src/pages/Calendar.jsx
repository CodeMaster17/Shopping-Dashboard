import React from 'react'

import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule'


import { scheduleData } from "../data/dummy"
import { Header } from '../components'

const Calendar = () => {
    return (
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
            <Header category="App" title="Calendar" />
            <ScheduleComponent
                height="650px"
                eventSettings={{ dataSource: scheduleData }}

                // to start the date from 2021coz our date is based on 2021
                selectedDate={new Date(2021, 0, 10)}
            >
                {/* by doing this only calendar appears */}
                <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
            </ScheduleComponent>
        </div>

    )
}

export default Calendar
