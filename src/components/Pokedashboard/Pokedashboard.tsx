import React from 'react'
import Chart from 'react-google-charts'
import Loading from '../Loading/Loading'

interface Props {
    data: any[]
}

function Pokedashboard(props: Props) {
    return (
        <div className="d-flex justify-content-center">
            <Chart width={400} height={300} 
            chartType="BarChart" 
            data={props.data}
            options= {{
                chartArea: { width: "50%" },
            }}
            loader={<Loading />}></Chart>
        </div>
    )
}

export default Pokedashboard
