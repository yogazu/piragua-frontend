import React from "react"
import LineChart from "../molecules/LineChart"
import LineChartB from "../molecules/LineChartB"
import BarChartF from "../molecules/BarChartF"
import ReporteDatosNivelCaudal from "../organisms/ReporteDatosNivelCaudal"
import ListaNivelCaudal from "../organisms/ListaNivelCaudal"

class  NivelCaudal extends React.Component {

    state = {
        temps: {},
        city: 'ny', // city whose temperatures to show
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
        // am.forEach(day => day.date = new Date(day.date));
        this.setState({temps: {sf, ny, am}});
    });
    }
    
    render (){

        const data = this.state.temps[this.state.city];
        return (
            
            <>
                <div className="ed-grid">
                    <ListaNivelCaudal/>
                </div>
                <br/>
                <div className="ed-grid">
                    <ReporteDatosNivelCaudal/>
                </div>
                <div className="ed-grid">
                   <LineChart data={data} />
                </div>
                <div className="ed-grid">
                    <BarChartF data={data} />
                </div>
                <div className="ed-grid">
                    <LineChartB data={data} />
                </div>
            </>
        )
    }

}

export default NivelCaudal