export interface ArticleListResponse {
  map(arg0: (item: any, index: any) => import("react").JSX.Element): import("react").ReactNode;
  slice(arg0: number, arg1: number): unknown;
  success: boolean;
  isLoading: boolean;
  isChange: boolean;
  data: Array<ArticleIntoData> | null;
  dataTrending: Array<ArticleIntoData> | null;
  dataRecommend: Array<ArticleIntoData> | null;
  pagination?: PaginationArticle;
  dataLatest?: Array<ArticleIntoData>;
  error: any;
  detail: ArticleDetail | null;
  tags: ListTagsIntoData | null;
  featured: Array<ArticleIntoData> | null;
}
export interface TagsResponse {
  success?: boolean;
  data: ListTagsIntoData;
  message?: string;
}

export interface ArticleDetailResponse {
  success?: boolean;
  data: ArticleDetail;
  message?: string;
}
export interface PaginationArticle {
  total: number;
  count: number;
  per_page: number;
  current_page: number;
  total_pages: number;
}

export interface ArticleDetail {
  id: number;
  category_id: number;
  content: string;
  image_id: number;
  user_id: number;
  title: string;
  slug: string;
  post_type: string;
  tags: Array<{ tag: string; slug: string }>;
  meta_description: string;
  created_at: string;
  commentsCount: number;
  image: ImageArticle;
  category: CategoryArticle;
  user: UserArticle;
  level: string;
  read_time: number;
}
export interface ArticleIntoData {
  id: number;
  category_id: number;
  content: string;
  image_id: number;
  user_id: number;
  title: string;
  slug: string;
  post_type: string;
  meta_description: string;
  comments_count?: number;
  total_hit?: null;
  images: ImageArticle;
  image: ImageArticle;
  created_at: string;
  read_time: null;
  level: null;
  user: UserArticle;
  category: CategoryArticle;
  tags: Array<TagArticle>;
}

export interface TagArticle {
  id: number;
  title: string;
  slug: string;
  pivot: PivotTags;
}
export interface PivotTags {
  post_id: number;
  tag_id: number;
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
  slug: string;
}

export interface ListTagsIntoData {
  current_page: number;
  data: Array<TagsData>;
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: null;
  to: number;
  total: number;
}
export interface TagsData {
  id: number;
  title: string;
  total_hit: number;
  status: number;
  slug: null;
  created_at: string;
  updated_at: string;
}
