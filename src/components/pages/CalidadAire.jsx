import React from "react"
import LineChartD from "../molecules/LineChartD"
import LineChartA from "../molecules/LineChartA"
import BarChartH from "../molecules/BarChartH"
import ListaCalidadAire from "../organisms/ListaCalidadAire";
import ReporteDatosCalidadAire from "../organisms/ReporteDatosCalidadAire";
class  CalidadAire extends React.Component {

    state = {
        temps: {},
        city: 'sf', // city whose temperatures to show
    };
    
    componentDidMount() {
    Promise.all([
        fetch(`${process.env.PUBLIC_URL}/sf.json`),
        fetch(`${process.env.PUBLIC_URL}/ny.json`),
        fetch(`${process.env.PUBLIC_URL}/us.json`),
    ]).then(responses => Promise.all(responses.map(resp => resp.json())))
    .then(([sf, ny, am]) => {
        sf.forEach(day => day.date = new Date(day.date));
        ny.forEach(day => day.date = new Date(day.date));
        // am.forEach(day => day.date = new Date(day.date));
        this.setState({temps: {sf, ny, am}});
    });
    }
    
    render (){

        const data = this.state.temps[this.state.city];
        return (
            
            <>
                <h3><center>Calidad Aire</center></h3>
                <div className="ed-grid">
                    <ListaCalidadAire/>
                </div>
                <br/>
                <div className="ed-grid">
                    <ReporteDatosCalidadAire/>
                </div>
                <br/>
                <h3><center>Calidad Del Aire</center></h3>
                <div className="ed-grid">
                   <LineChartD data={data} />
                </div>
                <br/>
                <h3><center>Calidad Del Aire</center></h3>
                <div className="ed-grid">
                    <BarChartH data={data} />
                </div>
                <br/>
                <h3><center>Calidad Del Aire</center></h3>
                <div className="ed-grid">
                    <LineChartA data={data} />
                </div>
            </>
        )
    }

}

export default CalidadAire