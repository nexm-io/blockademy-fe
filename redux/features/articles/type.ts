export interface ArticleListResponse {
  success: boolean;
  isLoading: boolean;
  data: Array<ArticleIntoData> | null;
  pagination?: PaginationArticle;
  dataLatest?: Array<ArticleIntoData>;
}
export interface PaginationArticle {
  total: number;
  count: number;
  per_page: number;
  current_page: number;
  total_pages: number;
}
// export interface ArticleLatestResponse {
//   success: boolean;
//   isLoading: boolean;
//   error: any;
//   data?: Array<ArticleLatestData>;
// }

// export interface ArticleDataResponse {
//   current_page?: number;
//   data: Array<ArticleIntoData>;
//   first_page_url?: string;
//   from?: number;
//   last_page?: number;
//   last_page_url?: string;
//   next_page_url?: string;
//   path?: string;
//   per_page?: string;
//   prev_page_url?: null;
//   to?: number;
//   total?: number;
// }

// export interface ArticleLatestData {
//   comments_count?: number;
//   id: number;
//   category_id: number;
//   image_id: number;
//   user_id: number;
//   title: string;
//   slug: string;
//   post_type: string;
//   tags: string;
//   meta_description: string;
//   created_at: string;
//   commentsCount: number;
//   image: ImageArticle;
//   category: CategoryArticle;
//   user: UserArticle;
// }
export interface ArticleIntoData {
  id: number;
  title: string;
  slug: string;
  post_type: string;
  meta_description: string;
  comments_count?: number;
  total_hit?: null;
  images: ImageArticle;
  created_at: string;
  read_time: null;
  level: null;
  user: UserArticle;
  category: CategoryArticle;
  tags: Array<TagArticle>;
}

export interface TagArticle {
  title: string;
  slug: string;
}

export interface ImageArticle {
  original_image: string;
  og_image: string;
  thumbnail: string;
  big_image: string;
  big_image_two: string;
  medium_image: string;
  medium_image_two: string;
  medium_image_three: string;
  small_image: string;
  thumbnail_two: string;
  small_image_two: string;
}

export interface CategoryArticle {
  id: number;
  category_name: string;
  slug: string;
}

export interface UserArticle {
  id: number;
  first_name: string;
  last_name: string;
  profile_image: null;
  bio: null;
  created_at: null;
}
