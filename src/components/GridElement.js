import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

function GridElement(props) {
  const { id, volumeInfo } = props.item;
  const { title, authors, imageLinks } = volumeInfo;
  return (
    <Grid item key={id}>
      <Card style={{ width: "320px" }}>
        <CardActionArea>
          <CardMedia
            style={{
              objectFit: "cover",
              objectPosition: "0 0",
              width: "320px",
              height: "400px"
            }}
            component="img"
            alt={title}
            image={imageLinks ? imageLinks.thumbnail : `https://via.placeholder.com/320x400?text=${title}`}
            title={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography component="p">
              {authors && authors.map((el, i) => (i === 0 ? el : `, ${el}`))}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default GridElement;
