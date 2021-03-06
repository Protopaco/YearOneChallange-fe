import { makeStyles } from "@material-ui/core/styles"

export const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        width: '50vw',
        height: '35vh',
        minWidth: "750px",
        minHeight: "250px"
    },
    poster: {
        width: '20vw',
        minWidth: "150px"
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        width: '100%',
    },
    chips: {
        display: "inline-flex",
        justifyContent: "space-around",
        listStyle: "none"
    },
    title: {
        display: "flex",
        justifyContent: "center"
    },
    buttons: {
        display: "inline-flex",
        justifyContent: "space-around",
        listStyle: "none"
    },
    synopsis: {
        height: "100%"
    },
    red: {
        cursor: "pointer",
        backgroundColor: 'red',
        color: 'white'
    },
    blue: {
        cursor: "pointer",
        backgroundColor: 'blue',
        color: 'white'
    },
    black: {
        cursor: "pointer",
        backgroundColor: 'black',
        color: 'white'
    }
}))

