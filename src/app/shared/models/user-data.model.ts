export interface Social {
  name: string;
  url: string;
  icon: string;
}

export interface Skill {
  name: string;
  level: number;
  icon?: string;
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: Skill[];
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export interface UserData {
  name: string;
  title: string;
  location: string;
  email: string;
  bio: string;
  socials: Social[];
  skillCategories: SkillCategory[];
  experiences: Experience[];
  education: Education[];
  navItems: {
    label: string;
    route: string;
    isExternal?: boolean;
  }[];
  footerLinks?: {
    category: string;
    links: {
      name: string;
      url: string;
    }[];
  }[];
}
