import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

const random = () => Math.round(Math.random() * 20 - 10);
const genDataRandom = () => ({
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            label: 'Scale',
            data: [random(), random(), random(), random(), random(), random()],
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