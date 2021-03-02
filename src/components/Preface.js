import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Typical  from 'react-typical'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Preface() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
      <Typical
        steps={['Hello', 1000, 'Saya Yasya Indra', 1000]}
        loop={Infinity}
        wrapper="p"
      />
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Sabda Nabi Muhammad SAW
        </Typography>
        <Typography variant="h5" component="h2">
        "Jika kamu mendengar wabah di suatu wilayah, maka janganlah kalian memasukinya. Tapi jika terjadi wabah di tempat kamu berada, maka jangan tinggalkan tempat itu."
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          HR Bukhori
        </Typography>
      </CardContent>
    </Card>
  );
}
