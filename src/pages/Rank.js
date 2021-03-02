import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Loading from '../components/Loading'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  head: {
    fontSize:'28px'
  }
});

function createData(id, name, calories, fat, carbs, protein) {
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData(1,'Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData(2,'Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData(3,'Eclair', 262, 16.0, 24, 6.0),
  createData(4,'Cupcake', 305, 3.7, 67, 4.3),
  createData(5,'Gingerbread', 356, 16.0, 49, 3.9),
  createData(6,'Gingerbread', 356, 16.0, 49, 3.9),
  createData(7,'Gingerbread', 356, 16.0, 49, 3.9),
  createData(8,'Gingerbread', 356, 16.0, 49, 3.9),
  createData(9,'Gingerbread', 356, 16.0, 49, 3.9),
  createData(10,'Gingerbread', 356, 16.0, 49, 3.9),
];


 
export default function Rank() {
  const classes = useStyles();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [allCountries, setAllCountries  ] = useState([])


  useEffect(() => {
    fetch(`https://covid19.mathdro.id/api/countries/`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);   
          setItems(result)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  },[])


  
  // console.log(items.countries ? items.countries.map( item => {
  //   console.log(item.name)
  // }) : 'tidak ada')
  

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <Loading/>;
  } else {



    return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead style={{fontStyle:'bold'}}>
          <TableRow>
            <TableCell>Country</TableCell>
              <TableCell align="center">Rank</TableCell>
              <TableCell align="center">Meninggal</TableCell>
              <TableCell align="center">Terkonfirmasi</TableCell>
              <TableCell align="center">Sembuh</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.id}</TableCell>
              <TableCell align="center">{row.calories}</TableCell>
              <TableCell align="center">{row.fat}</TableCell>
              <TableCell align="center">{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
}