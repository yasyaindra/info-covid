import React,{useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Loading from '../components/Loading';
import Summary from '../pages/Summary'
import DataCovid from '../components/DataCovid'
import { SelectionState } from '@devexpress/dx-react-chart';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width:'80%'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function CountryList() {
  const classes = useStyles();
 

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [country, setCountry] = useState('Indonesia')
  

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://covid19.mathdro.id/api/countries")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems([result.countries]);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

//   console.log(items)

const choosingCountry = (event) => {
    console.log(event.target.value)
    setCountry(event.target.value);
  };



  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <Loading/>;
  } else {
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-helper-label">Negara</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={country ? country : 'Indonesia'}
          onClick={choosingCountry}
        >
          <MenuItem value="">
            <em>Global</em>
          </MenuItem>
          {
              items[0] ? items[0].map( item => {
                return(<MenuItem value={item.name} name={item.name}>{item.name}</MenuItem>)
            }) : <p>Data Hilang</p>
          }
        </Select>
      </FormControl>
      {/* {console.log(`ini dari CountryList ${country}`)} */}
      <DataCovid country={country}/>
    </div>
  );
}
}