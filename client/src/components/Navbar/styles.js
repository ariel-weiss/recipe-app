import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    navBar: {
        borderRadius: 15,
        margin: '20px 0',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 50px',
    },
    heading: {
        
    },
    logo: {
        display: 'flex',
        justifyContent: 'flex-begin',
        border: '1px solid black',
        width: '10%',
        height: 'auto',
        padding: '10px 0 50px',
        marginRight: '2px',
        borderRadius: '40%',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '160px',
      },
}));