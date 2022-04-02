import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  footer: {
    textAlign: 'center',
    position: 'fixed',
    left: 0,
    bottom: 0,
    color: 'black',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '120px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  title: {
    fontSize: '4.5rem',
    fontWeight: 'bold',
    color: 'white',
    marginLeft: '15%',
    [theme.breakpoints.down('sm')]: {
      fontSize: '3rem',
      marginLeft: '0',
  },
},
  link: {
    textDecoration: 'none',
    color: 'rgba(21, 101, 192)',
  },
  image: {
    marginLeft: 20,
},
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    padding: '3%',
    borderRadius: 10,
    color: 'white',
    boxShadow: '0 15px 15px 0 crimson',
    margin: '0 12px',
    textAlign: 'center',
    height: '25vmin',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      textAlign: 'center',
      width: '100%',
      height: 'initial',
      '&:nth-of-type(1)': {
        marginBottom: '12px',
      },
    },
  },
  infoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  logoContainer: {
    padding: '0 5%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      textAlign: 'center',
    },
  },
  logo: {
    height: '27vmin',
    width: '20vmin',
    borderRadius: '15%',
    padding: '0',
    margin: '3% 0',
    boxShadow: '0 15px 15px 0 crimson',
    [theme.breakpoints.down('sm')]: {
      height: '45vmin',
      width: '40vmin',
    },

  },
  backgroundVideo: {
  position: 'fixed',
  zIndex: '-1',
  top: '50%',
  left: '50%',
  width: 'auto',
  height: 'auto',
  minHeight: '100%',
  WebkitTransform: 'translate(-50%, -50%)',
  MozTransform: 'translate(-50%, -50%)',
  MsTransform: 'translate(-50%, -50%)',
  transform: 'translate(-50%, -50%)',
  display: 'inline-block',
}
}));
