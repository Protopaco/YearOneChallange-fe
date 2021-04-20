import React from "react"
import { Card, CardActionArea, CardContent, CardMedia, Typography, Tooltip } from "@material-ui/core";

export default function MovieCard({ movieObj, handleCardClick }) {
    const { image, title } = movieObj;

    return (
        <Tooltip
            title={title}
            aria-label={title}>
            <Card
                style={{ width: 150, margin: 25 }}
                elevation={3}
                onClick={() => handleCardClick(movieObj)}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        image={image}
                        title={title}
                    />
                </CardActionArea>
            </Card>
        </Tooltip >
    )

}