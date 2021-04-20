import React from 'react';
import { Card, CardContent, CardMedia, Chip, Typography, Avatar } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles"
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        width: '50vw',
        height: '35vh'
    },
    poster: {
        width: '20vw'
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
    red: {
        cursor: "pointer",
        backgroundColor: 'red'
    },
    blue: {
        cursor: "pointer",
        backgroundColor: 'blue'
    },
    black: {
        cursor: "pointer",
        backgroundColor: 'black'
    }
}))

export default function MovieDetails({ movieObj, handleCloseDetails }) {
    const { image, rating, released, runtime, synopsis, title } = movieObj;
    const classes = useStyles();

    return (
        <Card
            className={classes.root}>
            <CardMedia
                component="img"
                className={classes.poster}
                image={image}
                title={title} />
            <CardContent
                className={classes.content}>

                <Typography
                    variant="h5"
                    color="textPrimary"
                    className={classes.title}>
                    {title}
                </Typography>
                <ul
                    className={classes.chips}>
                    <li>
                        <Chip
                            label={`Rating ${rating}`} />
                    </li>
                    <li>
                        <Chip
                            label={`Runtime: ${runtime}`} />
                    </li>
                    <li>
                        <Chip
                            label={`Released: ${released}`} />
                    </li>
                </ul>
                <Typography>
                    {synopsis}
                </Typography>
                <ul
                    className={classes.buttons}>
                    <li>
                        <Avatar
                            className={classes.red}>
                            <ThumbUpIcon />
                        </Avatar>
                    </li>
                    <li>
                        <Avatar
                            className={classes.blue}>
                            <ThumbDownIcon />
                        </Avatar>
                    </li>
                    <li>
                        <Avatar
                            className={classes.black}
                            onClick={handleCloseDetails}>
                            <CloseIcon />
                        </Avatar>
                    </li>
                </ul>

            </CardContent>
        </Card>
    )
}