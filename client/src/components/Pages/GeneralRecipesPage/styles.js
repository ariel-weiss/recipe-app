import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
  searchForm: {
    display: 'grid',
    width: '100%',
    justifyContent: 'space-evenly',
    gridTemplateColumns: 'auto auto auto auto auto',
    paddingTop: '5px',
    paddingBottom: '5px',
    margin: '10px 0 10px 0',
  },
  searchDiv: {
    display: 'grid',
    width: '100%',
    justifyContent: 'space-between',
    gridTemplateColumns: 'auto auto',
    backgroundColor: 'rgba(255, 255, 255, 0.10)',
    opacity: '90%',
    padding: '10px 12px 10px 12px',
  },
  searchBar: {
    background: 'white',
    borderRadius: 2,
  },
  searchButton: {
    borderRadius: 15,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  }
}));