export interface Project {
  id?: number; // Optional for new projects
  title: string;
  description: string;
  imageUrl: string;
  projectUrl?: string;
}
