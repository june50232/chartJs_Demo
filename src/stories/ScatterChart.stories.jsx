import React from 'react';
import { Scatter } from 'react-chartjs-2';

export default {
    title: 'Example/Scatter Chart',
    component: Scatter,
    argTypes: {
        //backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <Scatter {...args} />;
const rand = () => Math.round(Math.random() * 20 - 10);
export const Basic = Template.bind({});
Basic.args = {
    data: {
        datasets: [
            {
                label: 'A dataset',
                data: [
                    { x: rand(), y: rand() },
                    { x: rand(), y: rand() },
                    { x: rand(), y: rand() },
                    { x: rand(), y: rand() },
                    { x: rand(), y: rand() },
                    { x: rand(), y: rand() },
                    { x: rand(), y: rand() },
                    { x: rand(), y: rand() },
                    { x: rand(), y: rand() },
                    { x: rand(), y: rand() },
                    { x: rand(), y: rand() },
                    { x: rand(), y: rand() },
                    { x: rand(), y: rand() },
                    { x: rand(), y: rand() },
                ],
                backgroundColor: 'rgb(255,99,132)',
            },
        ],
    },
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
    },
};
