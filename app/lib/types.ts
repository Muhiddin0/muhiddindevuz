// Project
export interface Project {
  id: number;
  title: string;
  description: string;
  reles_date: string; // This should be `release_date` if it's a typo in the JSON
  link: string;
  technology_list: Technology[];
  images: ProjectImage[];
  videos: Video[];
  views: number;
}

export interface Technology {
  id: number;
  skils: number; // This should be `skills` if it's a typo in the JSON
}

export interface ProjectImage {
  id: number;
  image: string;
}

export interface Video {
  id: number;
  video_url: string;
}

// Moderator
interface Skill {
  id: number;
  skil: string;
  skil_img: string;
}

interface SkillList {
  id: number;
  skils: Skill;
}

interface Offer {
  id: number;
  name: string;
  logo: string;
  link: string;
}

export type UserProfile = {
  id: number;
  name: string;
  birth_date: string;
  expirence: number;
  position: string;
  description: string;
  profile: string;
  telegram: string;
  instagram: string;
  youtube: string | null;
  tiktok: string | null;
  linkedin: string | null;
  twitter: string | null;
  facebook: string | null;
  location: string | null;
  skil_list: SkillList[];
  offer: Offer[];
  rezyume: string;
};
