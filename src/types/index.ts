export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    link: string;
}

export interface Skill {
    name: string;
    level: number; // percentage
}

export interface ContactFormData {
    name: string;
    email: string;
    message: string;
}