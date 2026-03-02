export interface Project {
    id: number;
    title: string;
    shortDescription: string;
    fullDescription: string;
    technologies: string[];
    features: string[];
    category: 'fullstack' | 'ai' | 'automation' | 'mobile' | 'backend';
    accentColor: string;
    icon: string;
}

export interface SkillCategory {
    category: string;
    icon: string;
    skills: string[];
}

export interface Service {
    title: string;
    description: string;
    icon: string;
    features: string[];
}

export interface TimelineItem {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    period: string;
    type: 'project' | 'work';
}
