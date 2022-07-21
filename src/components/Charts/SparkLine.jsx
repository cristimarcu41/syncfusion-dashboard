import React from 'react';
import {SparklineComponent, Inject, SparklineTooltip} from "@syncfusion/ej2-react-charts";

const SparkLine = ({currentColor, id, height, width, color, data, type}) => {
    return (
        <SparklineComponent
            id={id}
            height={height}
            lineWidth={1}
            valueType="Numeric"
            fill={color}
            border={{color: currentColor, width: width}}
            dataSource={data}
            xName="x"
            yName="yval"
            type={type}
            tooltipSettings={{
                visible: true,
                format:    '${x} : data ${yval}',
                trackLineSettings: {
                    visible: true
                }
            }}
        >
            <Inject services={[SparklineTooltip]} />
        </SparklineComponent>
    );
};

export default SparkLine;
