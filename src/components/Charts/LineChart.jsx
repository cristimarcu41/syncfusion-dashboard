import React from 'react';
import {ChartComponent, LineSeries, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, Legend, Tooltip} from "@syncfusion/ej2-react-charts";

import {lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis} from "../../data/dummy";
import {useStateContext} from "../../contexts/ContextProvider";

const LineChart = () => {
    const {currentMode}= useStateContext();
    return (
        <ChartComponent
            id="line-chart"
            // background={currentMode==='dark'? '#a7a7a7': '#fff'}
            primaryXAxis={LinePrimaryXAxis}
            primaryYAxis={LinePrimaryYAxis}
            chartArea={{border:{width:0}}}
            tooltip={{enable:true}}
        >
            <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
            <SeriesCollectionDirective>
                {lineCustomSeries.map((item, index)=>(
                    <SeriesDirective key={index} {...item} />
                ))}
            </SeriesCollectionDirective>
        </ChartComponent>
    );
};

export default LineChart;
