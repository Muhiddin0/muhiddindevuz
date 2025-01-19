export interface ProjectAPIResponse {
  status: boolean;
  data: {
    links: {
      previous: string | null;
      next: string | null;
    };
    total_items: number;
    total_pages: number;
    page_size: number;
    current_page: number;
    results: Array<{
      id: number;
      poster: string;
      name: string;
      description: string;
      source_code: string;
      live_demo: string;
    }>;
  };
}

export interface Image {
  id: number;
  image: string;
  name: string;
}

export interface ProjectRetriveAPIResponse {
  status: boolean;
  data: {
    id: number;
    images: Image[];
    poster: string;
    name: string;
    description: string;
    content: string;
  };
}
