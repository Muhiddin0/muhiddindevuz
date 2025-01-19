export interface ApiResponse {
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
    }>;
  };
}
