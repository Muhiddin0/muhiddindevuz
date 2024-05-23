export interface Project {
  id: number;
  title: string;
  description: string;
  reles_date: string; // This should be `release_date` if it's a typo in the JSON
  link: string;
  technology_list: Technology[];
  images: ProjectImage[];
  videos: Video[];
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
