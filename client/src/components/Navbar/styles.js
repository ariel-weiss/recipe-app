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
    vline: {
        borderLeft: "3px solid rgba(200,50,100, 0.3)",
        height: "100%",
        position: "absolute",
        left: "50%",
        marginLeft: "-3px",
        top: "0",
    },
    heading: {
        color: 'rgba(200,83,110, 1)',
        textDecoration: 'none',
        textShadow: '1px 1px rgba(0,0,0, 1)',
      },
      image: {
        marginLeft: '15px',
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
        width: '300px',
    },
    profile: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '400px',
    },
    userName: {
        display: 'flex',
        alignItems: 'center',
        textShadow: '1px 1px rgba(0,0,0, 1)',
      },
      brandContainer: {
        display: 'flex',
        alignItems: 'center',
      },
}));