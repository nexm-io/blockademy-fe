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
  error: any;
  pagination?: PaginationArticle;
  dataProfile: AuthorProfileResponse | null;
  data: Array<ListAuthor> | null;
  dataPost: Array<AuthorIntoData> | null;
}

export interface ListAuthorPostResponse {
  isLoading: boolean;
  success?: boolean;
  message: string;
  error: any;
  data: Array<AuthorIntoData>;
  pagination?: PaginationArticle;
}

export interface ImageOriginal {
  original_image: string;
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
  image: ImageOriginal;
  slug: string;
  created_at: string;
}

export interface AuthorIntoData {
  total_post?: number;
  last_name?: string;
  first_name?: string;
  id: number;
  category_id: number;
  status: number;
  sub_category_id: null;
  image_id: number;
  user_id: number;
  title: string;
  slug: string;
  created_at: number;
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
  total_post: number;
}

export interface ListAuthor {
  id: number;
  first_name: string;
  last_name: string;
  total_post: number;
  image: ImageOriginal;
  slug: string;
  created_at: string;
}
