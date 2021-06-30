import React from 'react';
import { PolarArea } from 'react-chartjs-2';

export default {
    title: 'Example/Polar Area Chart',
    component: PolarArea,
    argTypes: {
        //backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <PolarArea {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    data:  {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 159, 64, 0.5)',
                ],
                borderWidth: 1,
            },
        ],
    },
};
