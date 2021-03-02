import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Aku from '../img/aku.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height:'100%'
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h1>Indra Maulana Yasya</h1>
            <img src={Aku} width="320px" height="370px"/>
            <p>Saya seorang Web Devoloper yang berdomisili di Tangerang. Silahkan ikuti segala social media profile saya untuk lebih lengkapnya</p>
            <p>Linkedin: Indra Maulana Yasya</p>
            <p>Twitter: @yasyayayasya</p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}