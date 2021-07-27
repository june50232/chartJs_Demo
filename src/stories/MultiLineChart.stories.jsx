import React from 'react';
import MultilineChart from "../MultiLineChart";
import schc from "../data/SCHC.json";
import vcit from "../data/VCIT.json";
import portfolio from "../data/portfolio.json";

export default {
    title: 'Example/MultiLine Chart',
    component: MultilineChart,
    argTypes: {
        //backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <MultilineChart {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    data: [
        {
            name: "Portfolio",
            color: "green",
            items: portfolio.map((d) => ({ ...d, date: new Date(d.date) }))
        }, {
            name: "SCHC",
            color: "#d53e4f",
            items: schc.map((d) => ({ ...d, date: new Date(d.date) }))
        }, {
            name: "VCIT",
            color: "#5e4fa2",
            items: vcit.map((d) => ({ ...d, date: new Date(d.date) }))
        }
    ],
    dimensions: {
        width: 600,
        height: 300,
        margin: {
            top: 30,
            right: 30,
            bottom: 30,
            left: 60
        }
    }
};
