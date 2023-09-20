export interface AuthorResponse {
    pagination: any;
    isLoading: boolean;
    success?: boolean;
    message: string;
    data: Array<ListAuthor>;
    error: any;
  }
  
  export interface ListAuthor {
    id: number;
    first_name: string;
    last_name: string;
    total_post: number;
    image: string;
    slug: string;
    created_at: string;
  }
  