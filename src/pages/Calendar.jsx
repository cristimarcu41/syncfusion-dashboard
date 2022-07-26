import React from 'react';
import {ScheduleComponent, Day, Week, Month, Agenda, Inject, Resize, DragAndDrop, WorkWeek} from "@syncfusion/ej2-react-schedule";

import {scheduleData} from "../data/dummy";
import  {Header} from "../components";

const Calendar = () => {
    return (
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
            <Header title="Calendar" category="App" />
            <ScheduleComponent
                height="650px"
                eventSettings={{dataSource: scheduleData}}
            >
                <Inject services={[Day, Week, Month, WorkWeek, Agenda, Resize, DragAndDrop]} />
            </ScheduleComponent>
        </div>
    );
};

export default Calendar;
