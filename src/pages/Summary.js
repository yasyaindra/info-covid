import React, {useState, useEffect} from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Loading from '../components/Loading'
import CountryList from '../components/CountryList'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginBottom:'20px'
  },
}));

const theme = createMuiTheme({
  spacing:4
})



export default function CenteredGrid(props) {
  const classes = useStyles()
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://covid19.mathdro.id/api/")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems([result]);
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

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <Loading/>;
  } else {
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h1>Global Case</h1>
            <CountryList/>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
}