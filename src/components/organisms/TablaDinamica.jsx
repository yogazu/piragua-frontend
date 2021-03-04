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
  { id: 1, apellido: 'Arboleda', nombre: 'Daniela', edad: 35 , telefono:'312456789', lugar:'Damasco', zona:'Rural', genero:'H'},
  { id: 2, apellido: 'Montaño', nombre: 'Ayole', edad: 42 , telefono:'310567890', lugar:'Damasco', zona:'Rural',genero:'H' },
  { id: 3, apellido: 'Valencia', nombre: 'Luisa Fernanda', edad: 45, telefono:'312456789', lugar:'Damasco', zona:'Rural',genero:'H' },
  { id: 4, apellido: 'Bolivar', nombre: 'Luz Dari ', edad: 21 , telefono:'315478909', lugar:'Damasco', zona:'Rural',genero:'H'},
  { id: 5, apellido: 'Arenas', nombre: 'Jose Angel ', edad: 23, telefono:'0345678900', lugar:'Damasco', zona:'Rural',genero:'H' },
  { id: 6, apellido: 'Arenas', nombre: 'Carlos Alberto ', edad: 31, telefono:'21976689', lugar:'Damasco', zona:'Rural',genero:'H' },
  { id: 7, apellido: 'Gomez', nombre: 'Anderson', edad: 44 , telefono:'621345678', lugar:'Damasco', zona:'Rural',genero:'H'},
  { id: 8, apellido: 'Gomez', nombre: 'Orlanda', edad: 36 , telefono:'9875467', lugar:'Damasco', zona:'Rural',genero:'H'},
  { id: 9, apellido: 'Puerta', nombre: 'Manuel', edad: 65 , telefono:'4567890', lugar:'Damasco', zona:'Urbano',genero:'H'},
];

export default function TablaDinamica() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}
