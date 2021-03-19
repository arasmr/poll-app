import { Bar } from "react-chartjs-2";
import './chart.scss';

interface ChartProps {
    labels: string[],
    data: number[],
    question: string,
}

export default function Chart({
    labels,
    data,
    question,
}: ChartProps): JSX.Element {
    return (
        <div className="chart">
            <div className="chart_header">
                <h2>Poll Result</h2>
                <h5>{question}</h5>
            </div>
            <Bar
                data={{
                    labels: labels,
                    datasets: [
                        {
                            label: "Votes",
                            data: data,
                            backgroundColor: [
                                "rgb(131, 217, 220)",
                                "rgb(201, 151, 198)",
                                "rgb(254, 255, 191)",
                                "rgb(176, 239, 239)",
                                "rgb(187, 190, 54)",
                                "rgb(238, 27, 96)",
                                "rgb(255, 151, 48)",
                                "rgb(132, 43, 212)",
                                "rgb(58, 144, 241)",
                                "rgb(45, 217, 222)",
                            ],
                        },
                    ],
                }}
                height={300}
                options={{
                    responsive: true,
                    legend: {
                        display: false,
                    },
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    min: 0,
                                    stepSize: 1,
                                },
                            },
                        ],
                    },
                }}
            />
        </div>
    )
}