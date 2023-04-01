import { React, useState } from 'react'
import Chart from 'react-apexcharts'
function BarChart() {
    const [data, setData] = useState({

        series: [{
            name: 'Inflation',
            data: [648.16, 451.68,319.71, 140.93,28.44,28.31,20.08,19.95,17.08,16.12,15.12,13.89,11.35,10.47,10.37]
        }],
        options: {
            chart: {
                type: 'bar',
            },
            plotOptions: {
                bar: {
                    borderRadius: 10,
                    dataLabels: {
                        position: 'top', // top, center, bottom
                    },
                }
            },
            dataLabels: {
                enabled: true,
                formatter: function (val) {
                    return val + "%";
                },
                offsetY: -20,
                style: {
                    fontSize: '12px',
                    colors: ["#304758"]
                }
            },

            xaxis: {
                categories: ["absences", "G2", "G1", "failures", "Walc", "schoolsup", "romantic", "Fjob", "Dalc", "paid", "Mjob", "Medu","reason","goout","Fedu"],
                position: 'bottom',
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
                crosshairs: {
                    fill: {
                        type: 'gradient',
                        gradient: {
                            colorFrom: '#D8E3F0',
                            colorTo: '#BED1E6',
                            stops: [0, 100],
                            opacityFrom: 0.4,
                            opacityTo: 0.5,
                        }
                    }
                },
                tooltip: {
                    enabled: true,
                }
            },
            yaxis: {
                style: {
                    color: '#ffffff'
                },
                axisBorder: {
                    
                    show: false
                },
                axisTicks: {
                    show: false,
                },
                labels: {
                    show: false,
                }

            },
            title: {
                text: 'Impact of parameters in G3',
                align: 'center',
                style: {
                    color: '#000000'
                }
            }
        },


    })
    return (
        <div className="barChart">
            <Chart options={data.options} series={data.series} type="bar" height={400} width={670}/>
        </div>
    
       
    )
}

export default BarChart