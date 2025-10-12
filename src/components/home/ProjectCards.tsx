'use client';
import React from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Chip, Typography} from "@mui/material";
import { Project } from '@/data/projects';

interface ProjectCardsProps {
  project: Project;
}

const ProjectCards = ({ project }: ProjectCardsProps) => {
    const handleViewProject = () => {
      if (project.githubUrl) {
        window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
      }
    };

    return (
      <Card className="h-full flex flex-col">
        <CardMedia
          image={project.image}
          title={project.title}
          className="h-48"
        />
        <CardContent className="flex-grow">
          <Typography gutterBottom variant="h5" component="div">
            {project.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }} className="mb-3">
            {project.description}
          </Typography>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <Chip key={index} label={tech} size="small" />
            ))}
          </div>
        </CardContent>

        <CardActions sx={{ justifyContent: "center" }} className="mt-2">
          <Button 
            className="bg-black text-white w-full text-sm h-9"
            onClick={handleViewProject}
            disabled={!project.githubUrl}
          >
            {project.githubUrl ? 'Ver en GitHub' : 'Próximamente'}
          </Button>
        </CardActions>
      </Card>
    );
};

export default ProjectCards;