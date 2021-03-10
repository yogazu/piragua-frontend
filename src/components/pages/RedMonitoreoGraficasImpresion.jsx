import React from "react"
import Box from '@material-ui/core/Box';
import RedSocialGraficaActividad from "../molecules/RedSocialGraficaActividad";
import RedSocialFiltrosTabla from "../molecules/RedSocialFiltrosTabla";

class  RedRedMonitoreoGraficasImpresion extends React.Component {

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
                    <Box bgcolor="info.main" color="primary.contrastText"  textAlign="center" m={1} >
                    <h3><center> Imprimir </center></h3>
                    <h3><center> Reporte FQ</center></h3>
                    </Box>
                </div>
                <div className="ed-grid">
                    <RedSocialGraficaActividad data={data} />
                </div>
                <div className="ed-grid">
                    <Box bgcolor="info.main" color="primary.contrastText"  textAlign="center" m={1} >
                    <h3><center> Imprimir </center></h3>
                    <h3><center> Reporte HB</center></h3>
                    </Box>
                </div>
                <div className="ed-grid">
                    <RedSocialFiltrosTabla data={data} />
                </div>
            </>
        )
    }

}

export default RedRedMonitoreoGraficasImpresion