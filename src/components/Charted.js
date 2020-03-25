import React, { useMemo, useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2'

const Charted = ({ color }) => {
    const [chartData, setChartData] = useState({
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Weeks',
                data: [1000, 1000, 800, 1200, 1200, 400, 800],
                backgroundColor: [`${color ? color : 'violet'}`, `${color ? color : 'purple'}`, `${color ? color : 'teal'}`, `${color ? color : 'orangered'}`, `${color ? color : 'linen'}`, `${color ? color : 'cyan'}`, `${color ? color : 'gold'}`]
            }
        ]
    })

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%', height: '13.1875em' }}>
            <Bar
                data={chartData}
                options={{
                    maintainAspectRatio: false,
                    responsive: true,
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                            },
                        }],
                        xAxes: [{
                            gridLines: {
                                display: false
                            },
                            barThickness: 20
                        }]
                    }
                }}
            >
            </Bar>
        </div>
    )
}

export default Charted


