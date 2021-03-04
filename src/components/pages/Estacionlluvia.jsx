import React from "react"
import ListaEstacionLluvia from "../organisms/ListaEstacionLluvia"
import ReporteDatosLluvia from "../organisms/ReporteDatosLluvia"
import PrecipitacionDiaria from "../molecules/PrecipitacionDiaria"
import LineChartC from "../molecules/LineChartC"
import BarChartG from "../molecules/BarChartG"
import PrecipitacionSemanal from "../molecules/PrecipitacionSemanal"

class  EstacionLluvia extends React.Component {

    state = {
        temps: {},
        diario: 'sf',
        semanal: 'am' // city whose temperatures to show
    };
    
    componentDidMount() {
    Promise.all([
        fetch(`${process.env.PUBLIC_URL}/sf.json`),
        fetch(`${process.env.PUBLIC_URL}/ny.json`),
        fetch(`${process.env.PUBLIC_URL}/am.json`),
    ]).then(responses => Promise.all(responses.map(resp => resp.json())))
    .then(([sf, ny, am]) => {
        sf.forEach(day => day.date = new Date(day.date));
        ny.forEach(day => day.date = new Date(day.date));
        am.forEach(day => day.date = new Date(day.date));
        this.setState({temps: {sf, ny, am}});
    });
    }
    
    render (){

        const data = this.state.temps[this.state.diario];
        const dataSemanal = this.state.temps[this.state.semanal];
        return (
            
            <>
                <h3><center>Estaciones De Lluvia</center></h3>
                <div className="ed-grid">
                    <ListaEstacionLluvia/>
                </div>
                <br/>
                <div className="ed-grid">
                    <ReporteDatosLluvia/>
                </div>
                <br/>
                <h3><center>Precipitación Diaria</center></h3>
                <div className="ed-grid">
                   <PrecipitacionDiaria data={data} />
                </div>
                <br/>
                <h3><center>Precipitación Semanal</center></h3>
                <div className="ed-grid">
                    <PrecipitacionSemanal   data={dataSemanal} />
                </div>
                <br/>
                <h3><center>Precipitación Mensual</center></h3>
                <div className="ed-grid">
                    <LineChartC data={data} />
                </div>
            </>
        )
    }

}

export default EstacionLluvia