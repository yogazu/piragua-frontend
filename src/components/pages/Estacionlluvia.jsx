import React from "react"
import ListaEstacionLluvia from "../organisms/ListaEstacionLluvia"
import ReporteDatosLluvia from "../organisms/ReporteDatosLluvia"
import LineChart from "../molecules/LineChart"
import LineChartC from "../molecules/LineChartC"
import BarChartG from "../molecules/BarChartG"
class  EstacionLluvia extends React.Component {

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
                <div className="ed-grid">
                    <ListaEstacionLluvia/>
                </div>
                <div className="ed-grid">
                    <ReporteDatosLluvia/>
                </div>
                <div className="ed-grid">
                   <LineChart data={data} />
                </div>
                <div className="ed-grid">
                    <BarChartG data={data} />
                </div>
                <div className="ed-grid">
                    <LineChartC data={data} />
                </div>
            </>
        )
    }

}

export default EstacionLluvia