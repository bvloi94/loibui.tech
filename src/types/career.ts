export type MilestoneCategory = 'all' | 'engineering' | 'architecture' | 'leadership' | 'milestones';

export interface CareerMetric {
  label: string;
  value: string;
}

export interface CareerMilestone {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  startYear: number;
  endYear: number | 'Present';
  location: string;
  type: 'Full-time' | 'Contract' | 'Lead' | 'Founding';
  category: ('engineering' | 'architecture' | 'leadership' | 'milestones')[];
  summary: string;
  keyAchievements: string[];
  technologies: string[];
  metrics: CareerMetric[];
  highlight?: boolean;
  featured?: boolean;
}

export interface ProjectArchitecture {
  component: string;
  tech: string;
  purpose: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  tags: string[];
  metrics: string;
  period: string;
  role: string;
  architectureBreakdown?: ProjectArchitecture[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface SkillItem {
  name: string;
  level: number; // 1 to 100
  years: number;
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: SkillItem[];
}

export interface CareerStat {
  label: string;
  value: string;
  sub: string;
  icon: string;
}

export interface RoadmapPhase {
  phase: string;
  period: string;
  title: string;
  desc: string;
  active?: boolean;
}

export interface PhilosophyItem {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface ProfileData {
  name: string;
  handle: string;
  domain: string;
  roleTitle: string;
  shortBio: string;
  detailedBio: string[];
  avatar: string;
  availability: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  twitter?: string;
  stats: CareerStat[];
  roadmap: RoadmapPhase[];
  milestones: CareerMilestone[];
  projects: Project[];
  skillCategories: SkillCategory[];
  philosophies: PhilosophyItem[];
}
