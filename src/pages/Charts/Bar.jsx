import React from 'react';
import {  ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, ColumnSeries, DataLabel } from "@syncfusion/ej2-react-charts";
import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis} from "../../data/dummy";

import Header from "../../components/Header";
import {useStateContext} from "../../contexts/ContextProvider";

const Bar= () => {
    const { currentMode } = useStateContext();

    return (
        <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
            <Header category="Bar" title="Olympic Medal Counts - RIO"  />
            <ChartComponent
                id="charts"
                primaryXAxis={barPrimaryXAxis}
                primaryYAxis={barPrimaryYAxis}
                chartArea={{border:{width:0}}}
                background={currentMode === 'Dark' ? '#33373E' : '#fff'}
                tooltip={{enable: true}}
                legendSettings={{background:'white'}}

            >
                <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]} />
                <SeriesCollectionDirective >
                    {barCustomSeries.map((item, index)=> (
                        <SeriesDirective  key={index} {...item}/>
                    ))}
                </SeriesCollectionDirective>
            </ChartComponent>
        </div>
    );
};

export default Bar;