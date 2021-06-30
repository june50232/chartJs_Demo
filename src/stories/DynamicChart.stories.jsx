import React from 'react';
import DynamicChart from './DynamicChart';
import DynamicMultiTypeChart from './DynamicMultiTypeChart';

export default {
    title: 'Example/Dynamic Chart',
    component: DynamicChart,
    argTypes: {
        //backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <DynamicChart {...args} />;
const TemplateMulti = (args) => <DynamicMultiTypeChart {...args} />;

export const BarChart = Template.bind({});
BarChart.args = {
    options: {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    }
};

export const MultiType = TemplateMulti.bind({});
MultiType.args = {
    options: {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    }
};
