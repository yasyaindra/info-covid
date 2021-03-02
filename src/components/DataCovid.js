import React,{useEffect, useState} from 'react'
import {Grid} from '@material-ui/core' 
import Loading from '../components/Loading'

export default function DataCovid(props){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    console.log(`DataCovid.js ${props.country}`)

    useEffect(() => {
        fetch(`https://covid19.mathdro.id/api/countries/${props.country}`)
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setItems(result);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [props.country])

      console.log(items.confirmed)
    
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <Loading/>;
      } else {
      return (
    <Grid
container
direction="row"
justify="center"
alignItems="center" spacing={3}
>
<Grid item xs>
  <div>
            <h2 style={{color:'#a70000'}}>Meninggal</h2>
            <p>{items.deaths ? items.deaths.value : '0'}</p>
  </div>
</Grid>
<Grid item xs>
  <div>
            <h2 style={{color:'green'}}>Sembuh</h2>
            <p>{items.recovered ? items.recovered.value : '0'}</p>
  </div>
</Grid>

<Grid item xs>
  <div>
            <h2 style={{color:'yellow'}}>Terkonfirmasi</h2>
            <p>{items.confirmed ? items.confirmed.value : '0'}</p>
  </div>
</Grid>
</Grid>  )
}}