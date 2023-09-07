export interface ArticleListResponse {
  success: boolean;
  data: ArticleDataResponse;
}

export interface ArticleDataResponse {
  current_page: number;
  data: Array<ArticleIntoData>;
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  next_page_url: string;
  path: string;
  per_page: string;
  prev_page_url: null;
  to: number;
  total: number;
}

export interface ArticleIntoData {
  id: number;
  category_id: number;
  image_id: number;
  user_id: number;
  title: string;
  slug: string;
  post_type: string;
  tags: string;
  meta_description: string;
  created_at: string;
  commentsCount: number;
  image: ImageArticle;
  category: CategoryArticle;
  user: UserArticle;
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
}
