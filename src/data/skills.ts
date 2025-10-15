export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Material-UI"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "MongoDB", "Mongoose", "RESTful APIs"],
  },
  {
    category: "Herramientas",
    skills: ["Git", "GitHub", "Docker", "npm", "VS Code"],
  },
  {
    category: "Otros",
    skills: ["CI/CD", "Jenkins", "Responsive Design", "Web Performance"],
  },
];
