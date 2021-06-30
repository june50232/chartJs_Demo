import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

const random = () => Math.floor(Math.random() * 255);
const genDataRandom = () => ({
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            type: 'line',
            label: 'Dataset 1',
            borderColor: `rgb(${random()}, ${random()}, ${random()})`,
            borderWidth: 2,
            fill: false,
            data: [random(), random(), random(), random(), random(), random()],
        },
        {
            type: 'bar',
            label: 'Dataset 2',
            backgroundColor: `rgb(${random()}, ${random()}, ${random()})`,
            data: [random(), random(), random(), random(), random(), random(), random()],
            borderColor: 'white',
            borderWidth: 2,
        },
        {
            type: 'bar',
            label: 'Dataset 3',
            backgroundColor: `rgb(${random()}, ${random()}, ${random()})`,
            data: [random(), random(), random(), random(), random(), random(), random()],
        },
    ],
})

const DynamicChart = ({ data, options }) => {
    const [dynamicData, setData] = useState(genDataRandom());

    useEffect(() => {
        const interval = setInterval(() => setData(genDataRandom()), 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Bar data={dynamicData} options={options} />
    );
};

export default DynamicChart