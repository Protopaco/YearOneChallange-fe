import React from "react"
import { Card, CardActionArea, CardContent, CardMedia, Typography, Tooltip } from "@material-ui/core";

export default function MovieCard({ movieObj }) {
    const { image, rating, released, runtime, title } = movieObj;

    return (
        <Tooltip
            title={title}
            aria-label={title}>
            <Card
                style={{ width: 150, margin: 25 }}
                elevation={3}>
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