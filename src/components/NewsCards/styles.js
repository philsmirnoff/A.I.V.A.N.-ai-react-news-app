import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '45vh',
    padding: '10%',
    borderRadius: 10,
    color: 'white',
    baclgroundColor: 'rgba(21, 101, 192)',
    boxShadow: '0 15px 15px 0 crimson',
},
  infoCard: {
    display: 'flex', flexDirection: 'column', textAlign: 'center',
  },
  container: {
    padding: '0 5%',
    width: '100%',
    margin: 0,
  }
})

export default styles;
