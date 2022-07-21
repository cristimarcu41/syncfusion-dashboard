import React from 'react';
import {  AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationLegend, AccumulationDataLabel, AccumulationTooltip, PyramidSeries, AccumulationSelection} from '@syncfusion/ej2-react-charts';
import {PyramidData} from "../../data/dummy";
import {Header} from "../../components";
import {useStateContext} from "../../contexts/ContextProvider";

const Pyramid = () => {
    const {currentMode} = useStateContext();
    return (
        <div className="m-4 md:m-10 mt-24  p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
            <Header category="Pyramid" title="Food Comparison Chart" />
            <div className="w-full">
                <AccumulationChartComponent legendSettings={{position:"Bottom"}} tooltip={{ enable: true }} >
                    <Inject services={[AccumulationDataLabel, AccumulationTooltip, AccumulationLegend,  PyramidSeries, AccumulationSelection]} />
                    <AccumulationSeriesCollectionDirective>
                        <AccumulationSeriesDirective
                            type="Pyramid"
                            dataSource={PyramidData}
                            xName="x"
                            yName="y"
                            background={currentMode === 'Dark' ? '#33373E' : '#fff'}
                            dataLabel={{visible:true, name: "text", position:"Inside"}}

                        />
                    </AccumulationSeriesCollectionDirective>
                </AccumulationChartComponent>
            </div>
        </div>
    );
};

export default Pyramid;
