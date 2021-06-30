import React from 'react';
import { Bar } from 'react-chartjs-2';

export default {
    title: 'Example/Bar Chart',
    component: Bar,
    argTypes: {
        //backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <Bar {...args} />;

export const Vertical = Template.bind({});
Vertical.args = {
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    },
};

export const Horizontal = Template.bind({});
Horizontal.args = {
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    },
    options: {
        indexAxis: 'y',
        // Elements options apply to all of the options unless overridden in a dataset
        // In this case, we are setting the border of each horizontal bar to be 2px wide
        elements: {
            bar: {
                borderWidth: 2,
            },
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
            },
            title: {
                display: true,
                text: 'Chart.js Horizontal Bar Chart',
            },
        },
    }
};

export const Grouped = Template.bind({});
Grouped.args = {
    data: {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [
            {
                label: '# of Red Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: 'rgb(255, 99, 132)',
            },
            {
                label: '# of Blue Votes',
                data: [2, 3, 20, 5, 1, 4],
                backgroundColor: 'rgb(54, 162, 235)',
            },
            {
                label: '# of Green Votes',
                data: [3, 10, 13, 15, 22, 30],
                backgroundColor: 'rgb(75, 192, 192)',
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

export const Stacked = Template.bind({});
Stacked.args = {
    data: {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [
            {
                label: '# of Red Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: 'rgb(255, 99, 132)',
            },
            {
                label: '# of Blue Votes',
                data: [2, 3, 20, 5, 1, 4],
                backgroundColor: 'rgb(54, 162, 235)',
            },
            {
                label: '# of Green Votes',
                data: [3, 10, 13, 15, 22, 30],
                backgroundColor: 'rgb(75, 192, 192)',
            },
        ],
    },
    options: {
        scales: {
            yAxes: [
                {
                    stacked: true,
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
            xAxes: [
                {
                    stacked: true,
                },
            ],
        },
    },
};
const rand = () => Math.round(Math.random() * 20 - 10);
export const MultiType = Template.bind({});
MultiType.args = {
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                type: 'line',
                label: 'Dataset 1',
                borderColor: 'rgb(54, 162, 235)',
                borderWidth: 2,
                fill: false,
                data: [rand(), rand(), rand(), rand(), rand(), rand()],
            },
            {
                type: 'bar',
                label: 'Dataset 2',
                backgroundColor: 'rgb(255, 99, 132)',
                data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
                borderColor: 'white',
                borderWidth: 2,
            },
            {
                type: 'bar',
                label: 'Dataset 3',
                backgroundColor: 'rgb(75, 192, 192)',
                data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
            },
        ],
    },
};
