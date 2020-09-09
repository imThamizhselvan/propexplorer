import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Countdown from "react-countdown";
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';


const backgroundImage =
  'https://images.unsplash.com/photo-1568448720761-4169810a7ba2?auto=format&fit=crop&w=1400&q=80';

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
  countdownContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  countdownItem: {
    display: 'flex',
    flexDirection: 'column',
    width: '50px',
    boxSizing: 'border-box',
    padding: '10px 8px',
    margin: '12px 5px',
    textTransform: 'uppercase',
    borderRadius: '8px',
    backgroundColor: '#6fb1a8',
    color: '#ffffff',
  },
  countdownCount: {
    fontWeight: 'bolder',
    fontSize: '22px',
    display: 'flex',
    alignSelf: 'center',
  },
});

function ProductHero(props) {
  const { classes } = props;

  const Completionist = () => <span>You are good to go!</span>;

  const renderer = ({  days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <div className={classes.countdownContainer}>
          <span className={classes.countdownItem}>
            <span className={classes.countdownCount}>
            {days} 
            </span>
            Days
          </span>
          <span className={classes.countdownItem}>
            <span className={classes.countdownCount}>
            {hours} 
            </span>
            Hrs
          </span>
          <span className={classes.countdownItem}>
            <span className={classes.countdownCount}>
            {minutes} 
            </span>
            Mins
          </span>
          <span className={classes.countdownItem}>
            <span className={classes.countdownCount}>
            {seconds} 
            </span>
            Secs
          </span>
        </div>

      );
    }
  };

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Find your next property
      </Typography>
      {/* <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        Enjoy secret offers up to 20% off on the leading real estates in Australia
      </Typography> */}
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        Countdown to the launch
      </Typography>
      <Countdown date={'2021-01-01T00:00:00'} renderer={renderer} />
      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        id="bt-popup"
      >
        Pre-Register
      </Button>
      {/* <Typography variant="body2" color="inherit" className={classes.more}>
        Discover more
      </Typography> */}
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
