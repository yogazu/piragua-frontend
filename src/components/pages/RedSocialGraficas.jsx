import React from "react"
import RedSocialGraficaTipos from "../molecules/RedSocialGraficaTipos"
import RedSocialGraficaActividad from "../molecules/RedSocialGraficaActividad";
import RedSocialEdadGenero from "../molecules/RedSocialEdadGenero";
import RedSocialFiltrosTabla from "../molecules/RedSocialFiltrosTabla";

class  RedSocialGraficas extends React.Component {

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
                    <RedSocialGraficaTipos data={data} />
                </div>
                <div className="ed-grid">
                    <RedSocialGraficaActividad data={data} />
                </div>
                <div className="ed-grid">
                    <RedSocialEdadGenero data={data} />
                </div>
                <div className="ed-grid">
                    <RedSocialFiltrosTabla data={data} />
                </div>
            </>
        )
    }

}

export default RedSocialGraficas