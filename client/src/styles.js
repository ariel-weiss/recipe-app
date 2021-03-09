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
    gridTemplateColumns: 'auto auto',
    paddingTop: '5px',
    paddingBottom: '5px',
    margin: '10px 0 0 10px',
  },
  searchBar: {
    border: '1px',
    borderRadius: 15,
  },
  searchButton: {
    borderRadius: 10,
  }
}));