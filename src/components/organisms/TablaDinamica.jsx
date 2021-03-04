import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'nombre', headerName: 'Nombre', width: 110 },
  { field: 'apellido', headerName: 'Apellido', width: 110 },
  { field: 'telefono', headerName: 'Teléfono', width: 110 },
  { field: 'lugar', headerName: 'Vereda/Corregimiento', width: 110 },
  { field: 'zona', headerName: 'Zona', width: 110 },
  { field: 'genero', headerName: 'Genero', width: 100 },
  { field: 'edad', headerName: 'Rango Edad', width: 130},
];

const rows = [
  { id: 1, apellido: 'Snow', nombre: 'Jon', edad: 35 , telefono:'312456789', lugar:'Damasco', zona:'Rural', genero:'H'},
  { id: 2, apellido: 'Lannister', nombre: 'Cersei', edad: 42 , telefono:'312456789', lugar:'Damasco', zona:'Rural',genero:'H' },
  { id: 3, apellido: 'Lannister', nombre: 'Jaime', edad: 45, telefono:'312456789', lugar:'Damasco', zona:'Rural',genero:'H' },
  { id: 4, apellido: 'Stark', nombre: 'Arya', age: 16 , telefono:'312456789', lugar:'Damasco', zona:'Rural',genero:'H'},
  { id: 5, apellido: 'Targaryen', nombre: 'Daenerys', edad: null, telefono:'312456789', lugar:'Damasco', zona:'Rural',genero:'H' },
  { id: 6, apellido: 'Melisandre', nombre: null, edad: 150, telefono:'312456789', lugar:'Damasco', zona:'Rural',genero:'H' },
  { id: 7, apellido: 'Clifford', nombre: 'Ferrara', edad: 44 , telefono:'312456789', lugar:'Damasco', zona:'Rural',genero:'H'},
  { id: 8, apellido: 'Frances', nombre: 'Rossini', edad: 36 , telefono:'312456789', lugar:'Damasco', zona:'Rural',genero:'H'},
  { id: 9, apellido: 'Roxie', nombre: 'Harvey', edad: 65 , telefono:'312456789', lugar:'Damasco', zona:'Rural',genero:'H'},
];

export default function TablaDinamica() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}
