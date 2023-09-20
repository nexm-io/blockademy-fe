import {
  CategoryArticle,
  ImageArticle,
  PaginationArticle,
  TagArticle,
  UserArticle,
} from "../articles/type";

export interface AuthorResponse {
  isLoading: boolean;
  success?: boolean;
  message: string;
  data: Array<AuthorIntoData> | null;
  error: any;
  pagination?: PaginationArticle;
  dataProfile: AuthorProfileResponse | null;
}

export interface ProfileResponse {
  isLoading: boolean;
  success?: boolean;
  message: string;
  data: AuthorProfileResponse;
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

export interface AuthorIntoData {
  id: number;
  category_id: number;
  status: number;
  sub_category_id: null;
  image_id: number;
  user_id: number;
  title: string;
  slug: string;
  post_type: string;
  created: string;
  commentsCount: number;
  category: CategoryArticle;
  user: UserArticle;
  tags: TagArticle;
  image: ImageArticle;
}
export interface AuthorProfileResponse {
  id: number;
  name: string;
  profile_image: string;
  total_comments: number;
  total_video: number;
  slug: string;
}
