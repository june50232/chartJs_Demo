import React from 'react';
import { Radar } from 'react-chartjs-2';

export default {
    title: 'Example/Radar Chart',
    component: Radar,
    argTypes: {
        //backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <Radar {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    data:  {
        labels: ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6'],
        datasets: [
            {
                label: '# of Votes',
                data: [2, 9, 3, 5, 2, 3],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        scale: {
            ticks: { beginAtZero: true },
        },
    }
};
