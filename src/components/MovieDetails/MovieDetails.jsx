import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Chip, Typography, Avatar, Button } from '@material-ui/core'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import CloseIcon from '@material-ui/icons/Close';
import { useStyles } from "./MovieDetailsStyles";
import { upVote, downVote, fetchVotes } from "../../utils/fetchVoting";

export default function MovieDetails({ movieObj, handleCloseDetails }) {
    const { image, rating, released, runtime, synopsis, title, netflixid } = movieObj;
    const [upVotes, setUpVotes] = useState(0);
    const [downVotes, setDownVotes] = useState(0);
    const classes = useStyles();

    useEffect(() => {

        fetchVotes(netflixid)
            .then(response => {
                setUpVotes(response.upVotes);
                setDownVotes(response.downVotes);
            })
    }, [])

    const handleUpVote = () => {
        upVote(netflixid)
            .then(response => {
                setUpVotes(response.upVotes);
                setDownVotes(response.downVotes);
            })
    }

    const handleDownVote = () => {
        downVote(netflixid)
            .then(response => {
                setUpVotes(response.upVotes);
                setDownVotes(response.downVotes);
            })
    }

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
                    {title.replace("&#39;", "'")}
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
                <Typography
                    className={classes.synopsis}>
                    {synopsis.replace("&#39;", "'")}
                </Typography>
                <ul
                    className={classes.buttons}>
                    <li>
                        <Button
                            className={classes.red}
                            onClick={handleUpVote}
                            endIcon={<ThumbUpIcon />}>
                            {upVotes}
                        </Button>
                    </li>
                    <li>
                        <Button
                            className={classes.blue}
                            onClick={handleDownVote}
                            endIcon={<ThumbDownIcon />}>
                            {downVotes}
                        </Button>
                    </li>
                    <li>
                        <Button
                            className={classes.black}
                            onClick={() => handleCloseDetails()}
                            endIcon={<CloseIcon />} />
                    </li>
                </ul>

            </CardContent>
        </Card>
    )
}