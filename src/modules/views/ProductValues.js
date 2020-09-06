import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import productValues1 from '../../images/productValues1.svg';
import productValues2 from '../../images/productValues2.svg';
import productValues3 from '../../images/productValues3.svg';
import productCurvyLines from '../../images/productCurvyLines.png';



const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src={productCurvyLines}
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={productValues1}
                alt="suitcase"
              />
              <Typography variant="h6" className={classes.title}>
                Multiple Projects
              </Typography>
              <Typography variant="h5">
                {'You will get exclusive access to information about many projects, now choose your next property with a range of choices from across the country.'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={productValues2}
                alt="graph"
              />
              <Typography variant="h6" className={classes.title}>
                Trusted Professionals
              </Typography>
              <Typography variant="h5">
              {'Whether you are buying, selling or renting with us, you can rest assured you are in the hands of trusted professionals who live, breathe and love everything about Real estate.'}

              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={productValues3}
                alt="clock"
              />
              <Typography variant="h6" className={classes.title}>
                Exclusive rates
              </Typography>
              <Typography variant="h5">
                {'By registering with us, you will access specially negotiated rates in the real estate properties and also get special updates on the latest property news'}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);
