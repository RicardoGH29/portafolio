import React from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";

const ProjectCards = ({title = "Titulo", description = "", image = ''}) => {
    return (
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {description}
          </Typography>
        </CardContent>
        <div className="flex justify-center mt-2">
          <CardMedia
            image={image || "https://picsum.photos/200/300"}
            title={title}
            className="h-48 w-[80%]"
          />
        </div>

        <CardActions sx={{ justifyContent: "center" }} className="mt-2">
          <Button className="bg-black text-white w-full text-sm h-9">
            Ver Proyecto
          </Button>
        </CardActions>
      </Card>
    );
};

export default ProjectCards;